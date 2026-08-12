#!/usr/bin/env python3
"""Add fleet / ride / food-delivery verticals + fleet segment."""
from pathlib import Path
import re

path = Path('src/lib/copy.ts')
text = path.read_text()

text = text.replace(
    "    segmentShop: string\n    segmentMember: string\n    segmentOffice: string",
    "    segmentShop: string\n    segmentMember: string\n    segmentOffice: string\n    segmentFleet: string\n    toolsNote: string",
    1,
)
text = text.replace(
    "      segment: 'shop' | 'member' | 'office'",
    "      segment: 'shop' | 'member' | 'office' | 'fleet'",
    1,
)

def patch_section(section, is_my):
    # segmentFleet + toolsNote after segmentOffice
    if 'segmentFleet:' not in section:
        section = section.replace(
            "    segmentOffice: 'ရုံး · ကြေး · ငှားရမ်း',\n" if is_my else
            "    segmentOffice: 'Office · fees · bookings',\n",
            ("    segmentOffice: 'ရုံး · ကြေး · ငှားရမ်း',\n"
             "    segmentFleet: 'ယာဉ် · GPS · ပို့',\n"
             "    toolsNote:\n"
             "      'ဒစ်ဂျစ်တယ် tool — ယနေ့ Google Sheets ပိုင်ဆိုင်။ GPS / form / calendar တို့နဲ့ ချိတ်ဆက် routine ထပ်တိုးနိုင် (Grab/DoorDash app မဆောက်)။',\n")
            if is_my else
            ("    segmentOffice: 'Office · fees · bookings',\n"
             "    segmentFleet: 'Fleet · GPS · delivery',\n"
             "    toolsNote:\n"
             "      'Digital tools — you own Google Sheets today. Add GPS, forms, or calendar fetch/update routines later (not a Grab/DoorDash app build).',\n"),
            1,
        )

    # Move driver + logistics to fleet
    for pid in ('driver', 'logistics'):
        section = section.replace(
            f"        id: '{pid}',\n        trade:",
            f"        id: '{pid}',\n        trade:",
        )
        section = re.sub(
            rf"(        id: '{pid}',\n        trade: [^\n]+\n        kind: [^\n]+\n        segment: )'shop'",
            r"\1'fleet'",
            section,
            count=1,
        )

    # Market points append
    fleet_points_my = [
      'မြို့တွင်း taxi fleet — dispatch ရော၊ ဘယ်ယာဉ်မှာ ရော Viber ရော',
      'highway / intercity — GPS pin → sheet routine၊ passenger အကြောင်းကြား',
      'ကိုယ်ပိုင် ride dispatch — Grab app မဆောက်၊ ကိုယ့် fleet သုံးသူ',
      'food delivery chain — kitchen → driver → customer (DoorDash lite)',
    ]
    fleet_points_en = [
      'In-town taxi fleets — dispatch and “where is the car?” still on Viber',
      'Highway / intercity — GPS pin → sheet routines, passenger updates',
      'Own-fleet ride dispatch — Grab-like flow for your fleet, not a new app',
      'Food delivery chain — kitchen → driver → customer (DoorDash lite)',
    ]
    pts = fleet_points_my if is_my else fleet_points_en
    for p in pts:
        if p not in section:
            # append before closing bracket of marketPoints
            section = re.sub(
                r"(    marketPoints: \[\n(?:      '[^']+',\n)+)",
                r"\1      '" + p.replace("'", "\\'") + "',\n",
                section,
                count=1,
            )

    # Intro update
    if is_my:
        section = section.replace(
            "      'ဆိုင်၊ အဖွဲ့ဝင် club၊ ကွန်ဒို MC၊ အခန်းငှား — သင့်လုပ်ငန်းရွေးပြီး",
            "      'ဆိုင်၊ taxi fleet၊ food delivery၊ club၊ MC — သင့်လုပ်ငန်းရွေးပြီး",
            1,
        )
    else:
        section = section.replace(
            "      'Shop, member club, condo MC, guesthouse — pick your business",
            "      'Shop, taxi fleet, food delivery, club, MC — pick your business",
            1,
        )

    new_items = NEW_MY if is_my else NEW_EN
    if "id: 'taxi-town'" not in section.split('    items: [', 1)[1].split('  samples:', 1)[0]:
        section = section.replace(
            "        priceFrom: '၆၀,၀၀၀',\n      },\n    ],\n  },\n"
            if is_my else
            "        priceFrom: '60,000',\n      },\n    ],\n  },\n",
            ("        priceFrom: '၆၀,၀၀၀',\n      }," if is_my else "        priceFrom: '60,000',\n      },")
            + new_items
            + "\n    ],\n  },\n",
            1,
        )
    return section

NEW_MY = """
      {
        id: 'taxi-town',
        trade: 'စည်ပinnen taxi fleet',
        kind: 'ယာဉ်',
        segment: 'fleet',
        problem: 'dispatch · ယာဉ်ဘယ်မှာ · fare log Viber ရော',
        hook: 'ခေါ် → ခွဲ → ပို့ → မှတ် — Grab app မဆောက်',
        whyLight:
          'Grab/Uber လို app မဆောက်ရပါ။ ကိုယ့် taxi fleet အတွက် ခေါ်ဆိုမှု၊ ယာဉ်ခွဲ၊ fare မှတ်၊ passenger အကြောင်းကြား — Telegram + Sheets။ ရုံးနဲ့ လမ်းပေါ် တူညီစာရင်း · GPS device/link လိုရင် sheet routine ထပ်ချိတ်နိုင်။',
        flow: [
          ' passenger ခေါ် / message မှတ်ပါ',
          'ယာဉ် ခွဲ · driver က လက်ခံ',
          'status update · fare မှတ်ပါ',
          'နေ့စဉ် trip + fare summary',
        ],
        gets: [
          'dispatch list — Viber မရှုပ်အောင်',
          'ယာဉ် free/busy မြင်ရ',
          'fare / trip log (Sheets)',
          'passenger status update (Telegram)',
        ],
        priceFrom: '၇၅,၀၀၀',
      },
      {
        id: 'taxi-highway',
        trade: 'highway / intercity fleet',
        kind: 'GPS',
        segment: 'fleet',
        problem: 'GPS · passenger · manifest · sheet update လက်',
        hook: 'GPS pin → sheet · passenger ETA — highway fleet',
        whyLight:
          'fleet GPS platform ကြီး မဝယ်ရပါ။ location pin / GPS module ကနေ sheet update routine၊ trip manifest၊ passenger Telegram update — Yangon–Mandalay / intercity line အတွက်။ information engineering: fetch → record → notify။',
        flow: [
          'trip manifest မှတ်ပါ',
          'GPS / location pin → sheet update',
          'passenger ETA / arrived notify',
          'trip close · daily summary',
        ],
        gets: [
          'GPS → sheet update routine',
          'trip manifest + status',
          'passenger ETA / arrived message',
          'highway trip log you own',
        ],
        priceFrom: '၉၅,၀၀၀',
      },
      {
        id: 'ride-dispatch',
        trade: 'ride dispatch (ကိုယ့် fleet)',
        kind: 'ride',
        segment: 'fleet',
        problem: 'book · assign · track · fare — hotel/private hire',
        hook: 'Grab-like flow · ကိုယ့် app မလို — hotel car / private fleet',
        whyLight:
          'Grab clone မဟုတ်ပါ။ hotel car၊ private hire၊ small operator — book → assign driver → track status → fare log။ Telegram + Sheets · other tools ချိတ်ဆက် နိုင်ပါတယ်။',
        flow: [
          'ride request / booking',
          'driver assign · accept',
          'on the way / arrived / done',
          'fare log · daily report',
        ],
        gets: [
          'book → assign → track (light)',
          'driver + office same view',
          'fare / trip record',
          'routine: status → notify passenger',
        ],
        priceFrom: '၈၅,၀၀၀',
      },
      {
        id: 'food-delivery',
        trade: 'food delivery (DoorDash lite)',
        kind: 'ပို့',
        segment: 'fleet',
        problem: 'kitchen → driver → customer chain မချိတ်',
        hook: 'order → kitchen → driver → customer — app platform မဆောက်',
        whyLight:
          'DoorDash/GrabFood app မဆောက်ရပါ။ ဆိုင် kitchen၊ delivery driver၊ customer status — chain တစ်ခုတည်း Telegram + Sheets မှာ။ restaurant module နဲ့ ချိတ်နိုင် · SME delivery team အတွက်။',
        flow: [
          'order confirm → kitchen',
          'driver assign · pick up',
          'on the way · delivered notify',
          'daily delivery + sales log',
        ],
        gets: [
          'kitchen → driver → customer chain',
          'driver assign + status',
          'customer delivery update',
          'daily log in Sheets',
        ],
        priceFrom: '၉၅,၀၀၀',
        hot: true,
      },"""

NEW_EN = """
      {
        id: 'taxi-town',
        trade: 'In-town taxi fleet',
        kind: 'Fleet',
        segment: 'fleet',
        problem: 'Dispatch · where is the car · fare log on Viber',
        hook: 'Call → assign → go → log — without building Grab',
        whyLight:
          'No Grab/Uber app to build. For your taxi fleet: take the call, assign a car, log fare, update the passenger — Telegram + Sheets. Office and drivers share one list. GPS device link can feed sheet routines if you add it.',
        flow: [
          'Log passenger call / message',
          'Assign car · driver accepts',
          'Status update · log fare',
          'Daily trip + fare summary',
        ],
        gets: [
          'Dispatch list — less Viber chaos',
          'See which car is free/busy',
          'Fare / trip log (Sheets)',
          'Passenger status on Telegram',
        ],
        priceFrom: '75,000',
      },
      {
        id: 'taxi-highway',
        trade: 'Highway / intercity fleet',
        kind: 'GPS',
        segment: 'fleet',
        problem: 'GPS · passengers · manifest · manual sheet updates',
        hook: 'GPS pin → sheet · passenger ETA — highway fleet',
        whyLight:
          'No heavy fleet GPS platform. Location pin / GPS module → sheet update routines, trip manifest, passenger Telegram updates — for intercity lines. Information engineering: fetch → record → notify.',
        flow: [
          'Log trip manifest',
          'GPS / location pin → sheet update',
          'Passenger ETA / arrived notify',
          'Close trip · daily summary',
        ],
        gets: [
          'GPS → sheet update routine',
          'Trip manifest + status',
          'Passenger ETA / arrived message',
          'Highway trip log you own',
        ],
        priceFrom: '95,000',
      },
      {
        id: 'ride-dispatch',
        trade: 'Ride dispatch (your fleet)',
        kind: 'Ride',
        segment: 'fleet',
        problem: 'Book · assign · track · fare — hotel / private hire',
        hook: 'Grab-like flow · no new app — hotel car / private fleet',
        whyLight:
          'Not a Grab clone. Hotel car, private hire, small operator — book → assign driver → track status → fare log. Telegram + Sheets · can link other tools later.',
        flow: [
          'Ride request / booking',
          'Assign driver · accept',
          'On the way / arrived / done',
          'Fare log · daily report',
        ],
        gets: [
          'Book → assign → track (light)',
          'Driver + office same view',
          'Fare / trip record',
          'Routine: status → notify passenger',
        ],
        priceFrom: '85,000',
      },
      {
        id: 'food-delivery',
        trade: 'Food delivery (DoorDash lite)',
        kind: 'Delivery',
        segment: 'fleet',
        problem: 'Kitchen → driver → customer chain not linked',
        hook: 'Order → kitchen → driver → customer — no platform app',
        whyLight:
          'No DoorDash/GrabFood app to build. Link shop kitchen, delivery driver, and customer status in one Telegram + Sheets chain. Can connect to restaurant module · for SME delivery teams.',
        flow: [
          'Order confirm → kitchen',
          'Assign driver · pick up',
          'On the way · delivered notify',
          'Daily delivery + sales log',
        ],
        gets: [
          'Kitchen → driver → customer chain',
          'Driver assign + status',
          'Customer delivery update',
          'Daily log in Sheets',
        ],
        priceFrom: '95,000',
        hot: true,
      },"""

# Fix typo in NEW_MY - စည်ပinnen should be စည်ပinnen - use proper Myanmar: "မြို့内" -> "မြို့内" actually "မြို့内 taxi" - use "မြို့တွင်း taxi fleet"
NEW_MY = NEW_MY.replace('စည်ပinnen', 'မြို့တွင်း').replace(' passenger ', ' passenger ').replace("' passenger", "'passenger")
# hot:true in engines - engines type doesn't have hot on items - remove hot from NEW_MY/EN engine items
NEW_MY = NEW_MY.replace('\n        hot: true,', '')
NEW_EN = NEW_EN.replace('\n        hot: true,', '')

my_eng_start = text.index('  engines: {', text.index('const my: Copy'))
my_eng_end = text.index('  samples: {', my_eng_start)
text = text[:my_eng_start] + patch_section(text[my_eng_start:my_eng_end], True) + text[my_eng_end:]

en_eng_start = text.index('  engines: {', text.index('const en: Copy'))
en_eng_end = text.index('  samples: {', en_eng_start)
text = text[:en_eng_start] + patch_section(text[en_eng_start:en_eng_end], False) + text[en_eng_end:]

# --- pricing products ---
YES, NO = '✓', '—'

def std_tiers(lang, basic, pro, ent, seats, vol, br, feats, lims):
    if lang == 'my':
        return [
            dict(id='basic', price=basic, seats=seats[0], volume=vol[0], branches=br[0],
                 features=feats + ['Telegram + Sheets', 'GPS/tool routine (basic)'],
                 limits=lims + ['Grab/Food app clone မဟုတ်'], popular=True),
            dict(id='pro', price=pro, seats=seats[1], volume=vol[1], branches=br[1],
                 features=['စတင်အစီအစဉ် ပါဝင်သမျှ', 'fetch/update routine ပို'],
                 limits=lims + ['enterprise GPS suite မဟုတ်']),
            dict(id='enterprise', price=ent, seats=seats[2], volume=vol[2], branches=br[2],
                 features=['တိုးချဲ့ ပါဝင်သမျှ', 'ဦးစားပေး', 'tool link ပို'],
                 limits=['custom map app မပါ', 'အလွန်ကြီး = ညှိ']),
            dict(id='custom', price='', seats='ညှိ', volume='ညှိ', branches='ညှိ',
                 features=['tool chain custom', 'multi-fleet', 'ညှိ'],
                 limits=['ဈေး သီးခြား', 'scope ရှင်းမှ စ']),
        ]
    return [
        dict(id='basic', price=basic, seats=seats[0], volume=vol[0], branches=br[0],
             features=feats + ['Telegram + Sheets', 'Basic fetch/update routine'],
             limits=lims + ['Not a Grab/Food app clone'], popular=True),
        dict(id='pro', price=pro, seats=seats[1], volume=vol[1], branches=br[1],
             features=['Everything in Start', 'More fetch/update routines'],
             limits=lims + ['Not enterprise GPS suite']),
        dict(id='enterprise', price=ent, seats=seats[2], volume=vol[2], branches=br[2],
             features=['Everything in Growing', 'Priority help', 'More tool links'],
             limits=['No custom map app', 'Very large = Ask us']),
        dict(id='custom', price='', seats='Ask us', volume='Ask us', branches='Ask us',
             features=['Custom tool chain', 'Multi-fleet', 'Tuned'],
             limits=['Quoted price', 'Scope first']),
    ]

def pricing_product(pid, name, blurb, hot, tiers, matrix):
    tiers_js = []
    for t in tiers:
        pop = ',\n          popular: true' if t.get('popular') else ''
        feats = ',\n'.join(f"            '{f}'" for f in t['features'])
        lims = ',\n'.join(f"            '{l}'" for l in t['limits'])
        price = f"'{t['price']}'" if t['price'] else "''"
        tiers_js.append(f"""        {{
          id: '{t['id']}',
          price: {price},
          seats: '{t['seats']}',
          volume: '{t['volume']}',
          branches: '{t['branches']}',
          features: [
{feats},
          ],
          limits: [
{lims},
          ]{pop},
        }}""")
    matrix_js = []
    for r in matrix:
        matrix_js.append(f"""        {{
          feature: '{r['f']}',
          basic: '{r['b']}',
          pro: '{r['p']}',
          enterprise: '{r['e']}',
          custom: '{r['c']}',
        }}""")
    hot_line = ',\n      hot: true' if hot else ''
    return f"""      {{
      id: '{pid}',
      name: '{name}',
      blurb: '{blurb}'{hot_line},
      tiers: [
{','.join(tiers_js)},
      ],
      matrix: [
{','.join(matrix_js)},
      ],
    }}"""

fleet_products = [
    ('taxi-town', 'မြို့တွင်း taxi', 'dispatch · fare · status', False,
     '၇၅,၀၀၀', '၁၁၀,၀၀၀', '၁၆၀,၀၀၀',
     ('၃ ဦး', '၈ ဦး', '၁၅ ဦး'), ('trip ≈ ၈၀၀/လ', '≈ ၂,၅၀၀', '≈ ၆,၀၀၀'), ('၁ office', '၁', '၁–၂'),
     ['dispatch + fare log', 'free/busy view'],
     ['ကိုယ့် fleet သာ']),
    ('taxi-highway', 'highway / intercity', 'GPS → sheet · manifest · ETA', False,
     '၉၅,၀၀၀', '၁၄၀,၀၀၀', '၂၀၀,၀၀၀',
     ('၅ ဦး', '၁၂ ဦး', '၂၅ ဦး'), ('trip ≈ ၄၀၀/လ', '≈ ၁,၂၀၀', '≈ ၃,၀၀၀'), ('၁–၂ line', '၂–၃', '၃–၄'),
     ['GPS pin → sheet routine', 'passenger notify'],
     ['GPS platform မဟုတ်']),
    ('ride-dispatch', 'ride dispatch', 'book · assign · track · fare', False,
     '၈၅,၀၀၀', '၁၂၅,၀၀၀', '၁၈၀,၀၀၀',
     ('၅ ယာဉ်', '၁၅ ယာဉ်', '၃၀ ယာဉ်'), ('ride ≈ ၁,၂၀၀/လ', '≈ ၄,၀၀၀', '≈ ၁၀,၀၀၀'), ('၁ operator', '၁', '၁–၂'),
     ['book → assign → track', 'fare log'],
     ['Grab clone မဟုတ်']),
    ('food-delivery', 'food delivery lite', 'kitchen → driver → customer', True,
     '၉၅,၀၀၀', '၁၄၀,၀၀၀', '၂၀၀,၀၀၀',
     ('၈ ဦး', '၂၀ ဦး', '၄၀ ဦး'), ('order ≈ ၁,၅၀၀/လ', '≈ ၅,၀၀၀', '≈ ၁၂,၀၀၀'), ('၁–၂ shop', '၂–၃', '၃–၄'),
     ['delivery chain', 'customer update'],
     ['GrabFood platform မဟုတ်']),
]

fleet_en = [
    ('taxi-town', 'In-town taxi fleet', 'Dispatch · fare · status', False,
     '75,000', '110,000', '160,000',
     ('3 people', '8 people', '15 people'), ('≈ 800 trips/mo', '≈ 2,500', '≈ 6,000'), ('1 office', '1', '1–2'),
     ['Dispatch + fare log', 'Free/busy view'],
     ['Your fleet only']),
    ('taxi-highway', 'Highway / intercity', 'GPS → sheet · manifest · ETA', False,
     '95,000', '140,000', '200,000',
     ('5 people', '12 people', '25 people'), ('≈ 400 trips/mo', '≈ 1,200', '≈ 3,000'), ('1–2 lines', '2–3', '3–4'),
     ['GPS pin → sheet routine', 'Passenger notify'],
     ['Not a GPS platform']),
    ('ride-dispatch', 'Ride dispatch', 'Book · assign · track · fare', False,
     '85,000', '125,000', '180,000',
     ('5 drivers', '15 drivers', '30 drivers'), ('≈ 1,200 rides/mo', '≈ 4,000', '≈ 10,000'), ('1 operator', '1', '1–2'),
     ['Book → assign → track', 'Fare log'],
     ['Not a Grab clone']),
    ('food-delivery', 'Food delivery lite', 'Kitchen → driver → customer', True,
     '95,000', '140,000', '200,000',
     ('8 people', '20 people', '40 people'), ('≈ 1,500 orders/mo', '≈ 5,000', '≈ 12,000'), ('1–2 shops', '2–3', '3–4'),
     ['Delivery chain', 'Customer update'],
     ['Not GrabFood platform']),
]

def build_products(specs, lang):
    out = []
    for s in specs:
        pid, name, blurb, hot, b, p, e, seats, vol, br, feats, lims = s
        tiers = std_tiers(lang, b, p, e, seats, vol, br, feats, lims)
        matrix = [
            {'f': 'dispatch/chain' if lang == 'en' else 'dispatch/chain', 'b': YES, 'p': YES, 'e': YES, 'c': YES},
            {'f': 'GPS → sheet' if 'highway' in pid or 'taxi-highway' == pid else ('GPS/tool link' if lang == 'en' else 'GPS/tool ချိတ်'),
             'b': YES if 'highway' in pid else '—', 'p': YES, 'e': YES, 'c': YES},
            {'f': 'passenger/customer notify' if lang == 'en' else 'passenger/customer notify', 'b': YES, 'p': YES, 'e': YES, 'c': YES},
        ]
        out.append(pricing_product(pid, name, blurb, hot, tiers, matrix))
    return out

my_prods = build_products(fleet_products, 'my')
en_prods = build_products(fleet_en, 'en')

for lang, prods in [('my', my_prods), ('en', en_prods)]:
    marker = 'const my: Copy' if lang == 'my' else 'const en: Copy'
    start = text.index('    products: [', text.index(marker))
    end = text.index('    ],\n  },\n  howItWorks:', start)
    block = text[start:end]
    if "id: 'taxi-town'" not in block:
        block = block.rstrip() + ',\n' + ',\n'.join(prods) + '\n'
        text = text[:start] + block + text[end:]

# niches - append fleet items
fleet_niches_my = [
      'မြို့တွင်း taxi (၇၅,၀၀၀/လ)',
      'highway fleet + GPS (၉၅,၀၀၀/လ)',
      'ride dispatch (၈၅,၀၀၀/လ)',
      'food delivery lite (၉၅,၀၀၀/လ) ★',
]
fleet_niches_en = [
      'In-town taxi (75,000/mo)',
      'Highway fleet + GPS (95,000/mo)',
      'Ride dispatch (85,000/mo)',
      'Food delivery lite (95,000/mo) ★',
]

for niche in fleet_niches_my:
    if niche not in text:
        text = text.replace(
            "      'အလုပ် ၂ ခု+ ပေါင်းစပ်ဈေး',",
            f"      '{niche}',\n      'အလုပ် ၂ ခု+ ပေါင်းစပ်ဈေး',",
            1,
        )
for niche in fleet_niches_en:
    if niche not in text:
        text = text.replace(
            "      '2+ jobs combined quote',",
            f"      '{niche}',\n      '2+ jobs combined quote',",
            1,
        )

path.write_text(text)
print('taxi-town engines:', text.count("id: 'taxi-town'"))
print('segmentFleet:', 'segmentFleet:' in text)
