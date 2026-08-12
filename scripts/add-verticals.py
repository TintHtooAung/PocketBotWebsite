#!/usr/bin/env python3
"""Inject Myanmar SME verticals into copy.ts engines + pricing."""
from pathlib import Path
import re

path = Path(__file__).resolve().parents[1] / 'src/lib/copy.ts'
text = path.read_text()

# Add segment to existing engine items (MY block)
my_eng_start = text.index('  engines: {', text.index('const my: Copy'))
my_items_start = text.index('    items: [', my_eng_start)
my_clinic_end = text.index("        priceFrom: '၆၀,၀၀၀',", my_items_start)
# insert segment after kind for each item in MY engines - use regex on MY section only
my_eng_end = text.index('  samples: {', my_eng_start)
my_section = text[my_eng_start:my_eng_end]

def add_segment(section, mapping):
    for item_id, seg in mapping.items():
        pattern = rf"(        id: '{item_id}',\n        trade: [^\n]+\n        kind: [^\n]+\n)"
        repl = rf"\1        segment: '{seg}',\n"
        section, n = re.subn(pattern, repl, section, count=1)
        if n == 0:
            print(f'WARN segment miss MY {item_id}')
    return section

my_mapping = {
    'restaurant': 'shop', 'logistics': 'shop', 'driver': 'shop',
    'customer': 'shop', 'shop-eco': 'shop',
    'billing': 'office', 'tuition': 'office', 'clinic': 'office',
}
my_section = add_segment(my_section, my_mapping)

# Market fields after intro in MY
my_market = """    marketLabel: 'မြန်မာ SME ဈေးကွက်',
    marketIntro:
      'ရန်ကုန်/မန္တလေး ဆိုင်လုပ်ငန်း၊ ကွန်ဒို MC၊ စာအုပ်အဖွဲ့၊ အခန်းငှား၊ အတူဝယ်အဖွဲ့ — စနစ်ကြီး ဝယ်ဖို့ မကြီးသေးပေမဲ့ စာရင်း/သတိပေး/QR လိုတဲ့ လုပ်ငန်းတွေ များပါတယ်။ PocketX က Telegram + စာရင်းဇယားပေါ်မှာ ပေါ့ပါးအလုပ်တစ်ခုချင်း တပ်ဆင်ပေးပါတယ်။',
    marketPoints: [
      'ကွန်ဒို/တိုက်ခန်း MC — management ကြေး၊ ဧည့်သည်၊ အဖွဲ့ဝင် (Excel + Viber ရောထွေး)',
      'စာအုပ်အဖွဲ့ / club — ကြေး၊ အစည်းအဝေး တက်မှတ် (လက်ဖြင့်စာရင်း)',
      'အခန်းငှား / guesthouse — booking ထပ်၊ deposit မလက်',
      'အတူဝယ် / hnapyan — order sheet၊ ဘယ်သူပေးပြီး မသိ',
      'အခမ်းအနား / workshop — FB Messenger မှတ်ပုံတင် ရော',
      'အားကစားခန်း / studio — member card၊ class slot ရောထွေး',
    ],
    segmentShop: 'ဆိုင် · ပို့ · အတူဝယ်',
    segmentMember: 'အဖွဲ့ဝင် · QR · club',
    segmentOffice: 'ရုံး · ကြေး · ငှားရမ်း',
"""

if 'marketLabel:' not in my_section:
    my_section = my_section.replace(
        "    intro:\n      'ဆိုင်၊ ပို့ဆောင်၊ ငွေကောက်",
        f"    intro:\n      'ဆိုင်၊ ပို့ဆောင်၊ ငွေကောက်",
        1,
    )
    my_section = re.sub(
        r"(    intro:\n      'ဆိုင်၊ ပို့ဆောင်၊ ငွေကောက်[^']+',\n)",
        r"\1" + my_market,
        my_section,
        count=1,
    )

# Update MY engines intro
my_section = my_section.replace(
    "      'ဆိုင်၊ ပို့ဆောင်၊ ငွေကောက် — သင့်အလုပ်ရွေးပြီး နေ့စဉ် ဘယ်လိုလည်မလဲ ဖတ်ပါ။ အက်ပ်အသစ် မဆောက်ရပါ။ Telegram မှာပဲ စသုံးအောင် တပ်ဆင်ပေးပါတယ်။ တစ်ခု စပြီး၊ နောက်မှ အခြားအလုပ် ထပ်တောင်းနိုင်ပါတယ်။',",
    "      'ဆိုင်၊ အဖွဲ့ဝင် club၊ ကွန်ဒို MC၊ အခန်းငှား — သင့်လုပ်ငန်းရွေးပြီး နေ့စဉ် ဘယ်လိုလည်မလဲ ဖတ်ပါ။ အက်ပ်အသစ် မဆောက်ရပါ။ Telegram မှာပဲ စသုံးအောင် တပ်ဆင်ပေးပါတယ်။',",
)

NEW_MY_ENGINES = """
      {
        id: 'condo',
        trade: 'ကွန်ဒို / တိုက်ခန်း MC',
        kind: 'အသိုက်အဝန်း',
        segment: 'member',
        problem: 'management ကြေး · ဧည့်သည် · အဖွဲ့ဝင် စာရင်း ရောထွေး',
        hook: 'အဖွဲ့ဝင် · ကြေးကောက် · QR ဧည့်သည် — MC အတွက် ပေါ့ပါး',
        whyLight:
          'ကွန်ဒို management စနစ်ကြီး မဝယ်ရပါ။ owner / MC အတွက် အဖွဲ့ဝင် စာရင်း၊ လစဉ်ကြေး သတိပေး၊ ဧည့်သည် QR pass — Telegram နဲ့ စာရင်းဇယား။ Yangon/Mandalay condo MC တွေအတွက် တစ်ပတ်အတွင်း စသုံး။',
        flow: [
          'owner / unit စာရင်း မှတ်ပါ',
          'လစဉ် management ကြေး ထုတ် · သတိပေး',
          'ဧည့်သည် QR pass ထုတ် · gate မှတ်တမ်း',
          'ပေးပြီး/မပေး · ဧည့်သည် အကျဉ်း',
        ],
        gets: [
          'unit / အဖွဲ့ဝင် ပေးပြီး-မပေး ရှင်း',
          'ဧည့်သည် QR pass (scan မှတ်တမ်း)',
          'လစဉ် ကြေးကောက် အကျဉ်း',
          'MC committee မြင်ကွင်း',
        ],
        priceFrom: '၅၅,၀၀၀',
      },
      {
        id: 'book-club',
        trade: 'စာအုပ်အဖွဲ့ / club',
        kind: 'အဖွဲ့ဝင်',
        segment: 'member',
        problem: 'အစည်းအဝေး တက်မှတ် · ကြေး · member card ရောထွေး',
        hook: 'member · meeting QR တက်မှတ် · ကြေးသတိပေး',
        whyLight:
          'club app မဆောက်ရပါ။ အဖွဲ့ဝင် စာရင်း၊ ကြေးသတိပေး၊ အစည်းအဝေးမှာ QR scan တက်မှတ် — reading club၊ hobby club၊ alumni group တို့အတွက်။ Telegram သုံးနေတဲ့ member တွေအတွက် သင်တန်း မကြာ။',
        flow: [
          'member စာရင်း · ကြေးမှတ်ပါ',
          'member QR/card ထုတ်ပါ',
          'အစည်းအဝေးမှာ QR scan · တက်မှတ်',
          'ပေးပြီး/မပေး · တက်ရောက်မှတ်တမ်း',
        ],
        gets: [
          'member QR — meeting တက်မှတ်',
          'ကြေးသတိပေး (Telegram)',
          'တ Meeting attendance log',
          'member ပေးပြီး/မပေး',
        ],
        priceFrom: '၄၅,၀၀၀',
      },
      {
        id: 'gym-studio',
        trade: 'အားကစားခန်း / studio',
        kind: 'အဖွဲ့ဝင်',
        segment: 'member',
        problem: 'member card · class slot · တံခါးဝင် ရောထွေး',
        hook: 'member + class + QR ဝင်ခွင့် — gym/yoga/dance studio',
        whyLight:
          'gym software ကြီး မဝယ်ရပါ။ member စာရင်း၊ class slot၊ QR ဝင်မှတ် — small studio / neighborhood gym အတွက်။ member card machine မလို · Telegram + QR။',
        flow: [
          'member register · ကြေးမှတ်',
          'class slot / schedule',
          'QR scan · ဝင်မှတ်',
          'member ကုန်ခ näher · သတိပေး',
        ],
        gets: [
          'member QR ဝင်မှတ်',
          'class slot / schedule',
          'member ကုန်ခ näher သတိပေး',
          'တက်ရောက်မှတ်တမ်း',
        ],
        priceFrom: '၆၅,၀၀၀',
      },
      {
        id: 'event',
        trade: 'အခမ်းအနား / workshop',
        kind: 'ပွဲ',
        segment: 'member',
        problem: 'မှတ်ပုံတင် · လက်မှတ် · တက်မှတ် FB ရော',
        hook: 'မှတ်ပုံတင် + QR လက်မှတ် — workshop/small event',
        whyLight:
          'event platform ကြီး မလိုပါ။ မှတ်ပုံတင်၊ QR ticket၊ တက်မှ scan — church group၊ training center၊ community workshop တို့အတွက်။ Messenger ရော မလုပ်ရ · Telegram တစ်ခုတည်း။',
        flow: [
          'participant မှတ်ပုံတင်',
          'QR ticket ထုတ်',
          'တက်ရောက်မှ scan',
          'participant list + summary',
        ],
        gets: [
          'QR ticket / လက်မှတ်',
          'တက်ရောက်မှ scan log',
          'participant list',
          'event day summary',
        ],
        priceFrom: '၅၀,၀၀၀',
      },
      {
        id: 'coop-order',
        trade: 'အတူဝယ် / hnapyan',
        kind: 'အတူဝယ်',
        segment: 'shop',
        problem: 'order sheet · deposit · ဘယ်သူပေးပြီး မသိ',
        hook: 'group order · deposit · ပို့ခွဲ — Telegram အတူဝယ်အဖွဲ့',
        whyLight:
          'Myanmar မှာ Telegram hnapyan / group buy အများဆုံး။ order sheet၊ deposit မှတ်၊ ပေးပြီး/မပေး၊ ပို့ခွဲ — Excel/Viber ရော မလုပ်ရ။ small organizer / community buyer အတွက်။',
        flow: [
          'group order ဖွင့်ပါ',
          'member order + deposit မှတ်ပါ',
          'ပေးပြီး/မပေး သတိပေး',
          'ပို့ရောက်မှ အကြောင်းကြား',
        ],
        gets: [
          'group order sheet တစ်ခုတည်း',
          'deposit / ပေးပြီး-မပေး',
          'member order summary',
          'delivery update (Telegram)',
        ],
        priceFrom: '၅၅,၀၀၀',
      },
      {
        id: 'rental',
        trade: 'အခန်းငှား / guesthouse',
        kind: 'ငှားရမ်း',
        segment: 'office',
        problem: 'booking ထပ် · deposit · check-in/out ရော',
        hook: 'room booking · deposit · guest QR check-in',
        whyLight:
          'booking engine / PMS ကြီး မဝယ်ရပါ။ room calendar၊ deposit reminder၊ guest QR check-in — small guesthouse၊ meeting room၊ short-stay rental အတွက်။ Mandalay/Yangon SME hospitality အတွက် သင်တန်း မကြာ။',
        flow: [
          'room / slot booking',
          'deposit · balance reminder',
          'guest QR check-in',
          'check-out · cleaning note',
        ],
        gets: [
          'room booking calendar',
          'deposit / balance reminder',
          'guest QR check-in log',
          'monthly occupancy summary',
        ],
        priceFrom: '၆၀,၀၀၀',
      },"""

# Fix typos in NEW_MY_ENGINES
NEW_MY_ENGINES = NEW_MY_ENGINES.replace('အ�	Owner', 'အ�	Owner').replace('Owner/', 'owner/').replace('Owner', 'owner')
NEW_MY_ENGINES = NEW_MY_ENGINES.replace('တ Meeting', 'meeting')
NEW_MY_ENGINES = NEW_MY_ENGINES.replace('member ကုန်ခ näher', 'member ကုန်ခနီး')
NEW_MY_ENGINES = NEW_MY_ENGINES.replace('whyLight:\n          \'ကွန်ဒို management', "whyLight:\n          'ကွန်ဒို management")
# Fix the owner typo properly
NEW_MY_ENGINES = NEW_MY_ENGINES.replace("'အ�	owner/", "'owner/").replace("'အ�	owner", "'owner")
NEW_MY_ENGINES = NEW_MY_ENGINES.replace('  \'owner/ unit', "  'owner / unit").replace("'owner/ MC", "'owner / MC")

if "id: 'condo'" not in my_section:
    anchor = "        priceFrom: '၆၀,၀၀၀',\n      },\n    ],\n  },\n  samples:"
    my_section = my_section.replace(
        "        priceFrom: '၆၀,၀၀၀',\n      },\n    ],",
        "        priceFrom: '၆၀,၀၀၀',\n      }," + NEW_MY_ENGINES + "\n    ],",
    )

text = text[:my_eng_start] + my_section + text[my_eng_end:]

# EN engines section
en_eng_start = text.index('  engines: {', text.index('const en: Copy'))
en_eng_end = text.index('  samples: {', en_eng_start)
en_section = text[en_eng_start:en_eng_end]

en_mapping = my_mapping
en_section = add_segment(en_section, en_mapping)

en_market = """    marketLabel: 'Myanmar SME market',
    marketIntro:
      'Shops, condo MCs, book clubs, guesthouses, group-buy circles — many Myanmar SMEs are too small for heavy software but need lists, reminders, and QR check-in. PocketX sets up one light job at a time on Telegram + a spreadsheet you own.',
    marketPoints: [
      'Condo / apartment MC — fees, visitors, member lists (Excel + Viber chaos)',
      'Book clubs / hobby groups — fees, meeting attendance (manual lists)',
      'Guesthouse / room rental — double bookings, deposits missed',
      'Group buy / hnapyan — order sheets, who paid unclear',
      'Workshops / events — Messenger sign-ups mixed with chat',
      'Gym / yoga studio — member cards, class slots overlap',
    ],
    segmentShop: 'Shop · delivery · group buy',
    segmentMember: 'Members · QR · clubs',
    segmentOffice: 'Office · fees · bookings',
"""

if 'marketLabel:' not in en_section:
    en_section = re.sub(
        r"(    intro:\n      'Restaurant, delivery[^']+',\n)",
        r"\1" + en_market,
        en_section,
        count=1,
    )

en_section = en_section.replace(
    "      'Restaurant, delivery, fee chasing — pick your job and read how a normal day runs. No new app to build. We set it up on Telegram so your team can start in about a week. Begin with one job; add another later if you need.',",
    "      'Shop, member club, condo MC, guesthouse — pick your business and read how a normal day runs. No new app to build. We set it up on Telegram so you can start in about a week.',",
)

NEW_EN_ENGINES = """
      {
        id: 'condo',
        trade: 'Condo / apartment MC',
        kind: 'Residence',
        segment: 'member',
        problem: 'Mgmt fees · visitors · member lists all mixed up',
        hook: 'Members · fee chase · visitor QR — light MC help',
        whyLight:
          'No condo management suite to buy. Member list, monthly fee reminders, visitor QR passes — for Yangon/Mandalay MC committees. Telegram + spreadsheet · live in about a week.',
        flow: [
          'Log owners / units',
          'Issue monthly mgmt fees · remind',
          'Generate visitor QR · gate log',
          'Paid / unpaid · visitor summary',
        ],
        gets: [
          'Clear unit paid / unpaid list',
          'Visitor QR pass with scan log',
          'Monthly fee collection brief',
          'Committee one-view',
        ],
        priceFrom: '55,000',
      },
      {
        id: 'book-club',
        trade: 'Book club / hobby club',
        kind: 'Members',
        segment: 'member',
        problem: 'Meeting attendance · fees · member cards messy',
        hook: 'Members · meeting QR check-in · fee reminders',
        whyLight:
          'No club app to build. Member list, fee reminders, QR scan at meetings — for reading clubs, hobby groups, alumni circles. Members already on Telegram · little training.',
        flow: [
          'Member list · log fees',
          'Issue member QR',
          'Scan QR at meeting · attendance',
          'Paid / unpaid · attendance log',
        ],
        gets: [
          'Member QR for meeting check-in',
          'Fee reminders on Telegram',
          'Meeting attendance log',
          'Member paid / unpaid list',
        ],
        priceFrom: '45,000',
      },
      {
        id: 'gym-studio',
        trade: 'Gym / yoga / dance studio',
        kind: 'Members',
        segment: 'member',
        problem: 'Member cards · class slots · entry overlap',
        hook: 'Members + classes + QR entry — small studio',
        whyLight:
          'No gym software suite. Member list, class schedule, QR entry log — for neighborhood gyms and small studios. No card machine · Telegram + QR.',
        flow: [
          'Register member · log fee',
          'Class slot / schedule',
          'QR scan · entry log',
          'Membership expiry reminder',
        ],
        gets: [
          'QR entry check-in',
          'Class schedule',
          'Expiry reminders',
          'Attendance log',
        ],
        priceFrom: '65,000',
      },
      {
        id: 'event',
        trade: 'Events / workshops',
        kind: 'Events',
        segment: 'member',
        problem: 'Sign-ups · tickets · attendance in Messenger',
        hook: 'Register + QR ticket — small events & workshops',
        whyLight:
          'No big event platform. Sign-up, QR ticket, scan on arrival — for church groups, training centers, community workshops. One Telegram channel · not mixed with chat.',
        flow: [
          'Participant sign-up',
          'Issue QR ticket',
          'Scan on arrival',
          'Participant list + summary',
        ],
        gets: [
          'QR ticket',
          'Arrival scan log',
          'Participant list',
          'Event day summary',
        ],
        priceFrom: '50,000',
      },
      {
        id: 'coop-order',
        trade: 'Group buy / hnapyan',
        kind: 'Group buy',
        segment: 'shop',
        problem: 'Order sheet · deposit · who paid unclear',
        hook: 'Group order · deposit · split delivery — Telegram buy circle',
        whyLight:
          'Very common in Myanmar: Telegram hnapyan / group buy. One order sheet, deposit log, paid/unpaid, delivery updates — without Excel + Viber mix. For small organizers.',
        flow: [
          'Open group order',
          'Log member order + deposit',
          'Remind paid / unpaid',
          'Notify when delivered',
        ],
        gets: [
          'One group order sheet',
          'Deposit / paid-unpaid',
          'Member order summary',
          'Delivery update on Telegram',
        ],
        priceFrom: '55,000',
      },
      {
        id: 'rental',
        trade: 'Room rental / guesthouse',
        kind: 'Rental',
        segment: 'office',
        problem: 'Double booking · deposit · check-in/out messy',
        hook: 'Room booking · deposit · guest QR check-in',
        whyLight:
          'No PMS or booking engine to buy. Room calendar, deposit reminders, guest QR check-in — for small guesthouses, meeting rooms, short-stay rentals. Little training.',
        flow: [
          'Book room / slot',
          'Deposit · balance reminder',
          'Guest QR check-in',
          'Check-out · cleaning note',
        ],
        gets: [
          'Room booking calendar',
          'Deposit / balance reminders',
          'Guest QR check-in log',
          'Monthly occupancy summary',
        ],
        priceFrom: '60,000',
      },"""

if "id: 'condo'" not in en_section:
    en_section = en_section.replace(
        "        priceFrom: '60,000',\n      },\n    ],",
        "        priceFrom: '60,000',\n      }," + NEW_EN_ENGINES + "\n    ],",
    )

text = text[:en_eng_start] + en_section + text[en_eng_end:]

print('Engines updated')

# Pricing product generator
YES, NO = '✓', '—'

def pricing_product(pid, name, blurb, hot, tiers_data, matrix_rows, lang='my'):
    YES, NO = '✓', '—'
    tiers_js = []
    for t in tiers_data:
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
    for r in matrix_rows:
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

def std_tiers(lang, basic_price, pro_price, ent_price, seats, vol, branch, feat_base, lim_base, vol_label='volume'):
    if lang == 'my':
        return [
            dict(id='basic', price=basic_price, seats=seats[0], volume=vol[0], branches=branch[0],
                 features=feat_base + ['Telegram နဲ့ စာရင်းဇယား', 'သုံးနည်း ပြပေး'],
                 limits=lim_base + ['ဒီအစီအစဉ် = ဒီအလုပ်သာ'], popular=True),
            dict(id='pro', price=pro_price, seats=seats[1], volume=vol[1], branches=branch[1],
                 features=['စတင်အစီအစဉ် ပါဝင်သမျှ'] + feat_base[1:2] + ['ပမာဏ / ဝန်ထမ်း ပို'],
                 limits=lim_base + ['ဆိုင်ခွဲ / အဖွဲ့ ထပ်မပါ']),
            dict(id='enterprise', price=ent_price, seats=seats[2], volume=vol[2], branches=branch[2],
                 features=['တိုးချဲ့အစီအစဉ် ပါဝင်သမျှ', 'ဦးစားပေး ကူညီ', 'လစဉ် စစ်ဆေး'],
                 limits=['စိတ်ကြိုက် အက်ပ် မပါ', 'အလွန်ကြီး = ညှိနှိုင်း']),
            dict(id='custom', price='', seats='ညှိနှိုင်း', volume='ညှိနှိုင်း', branches='ညှိနှိုင်း',
                 features=['အဖွဲ့ကြီးအဆင့်+', 'အလုပ်ပေါင်း', 'လိုအပ်ချက်အလိုက် ညှိ'],
                 limits=['ဈေး သီးခြား ရေး', 'scope ရှင်းမှ စ']),
        ]
    return [
        dict(id='basic', price=basic_price, seats=seats[0], volume=vol[0], branches=branch[0],
             features=feat_base + ['Telegram and spreadsheet', 'Walkthrough'],
             limits=lim_base + ['This plan = this job only'], popular=True),
        dict(id='pro', price=pro_price, seats=seats[1], volume=vol[1], branches=branch[1],
             features=['Everything in Start'] + feat_base[1:2] + ['More staff / volume'],
             limits=lim_base + ['No extra branch / group']),
        dict(id='enterprise', price=ent_price, seats=seats[2], volume=vol[2], branches=branch[2],
             features=['Everything in Growing', 'Priority help', 'Monthly check-in'],
             limits=['No custom app', 'Very large = Ask us']),
        dict(id='custom', price='', seats='Ask us', volume='Ask us', branches='Ask us',
             features=['Larger-team level+', 'Combined jobs', 'Tuned to your needs'],
             limits=['Quoted price', 'Scope agreed first']),
    ]

def std_matrix(lang, rows):
    return rows

products_my = [
    pricing_product('condo', 'ကွန်ဒို / MC', 'management ကြေး · QR ဧည့်သည် · member', False,
        std_tiers('my', '၅၅,၀၀၀', '၈၅,၀၀၀', '၁၃၀,၀၀၀',
            ('၃ ဦး', '၈ ဦး', '၁၅ ဦး'), ('unit ≈ ၁၅၀', 'unit ≈ ၄၀၀', 'unit ≈ ၈၀၀'),
            ('၁ တိုက်', '၁ တိုက်', '၁–၂ တိုက်'),
            ['member + ကြေးကောက်', 'QR ဧည့်သည်', 'gate log'],
            ['management စနစ်ကြီး မဟုတ်']),
        [{'f':'MC အလုပ်','b':YES,'p':YES,'e':YES,'c':YES},{'f':'QR ဧည့်သည်','b':YES,'p':YES,'e':YES,'c':YES},
         {'f':'unit / member','b':'≈၁၅၀','p':'≈၄၀၀','e':'≈၈၀၀','c':'ညှိ'},{'f':'Setup','b':YES,'p':YES,'e':YES,'c':YES}]),
    pricing_product('book-club', 'စာအုပ်အဖွဲ့ / club', 'member · meeting QR · ကြေး', False,
        std_tiers('my', '၄၅,၀၀၀', '၇၀,၀၀၀', '၁၀၀,၀၀၀',
            ('၂ ဦး', '၅ ဦး', '၁၀ ဦး'), ('member ≈ ၈၀', 'member ≈ ၂၅၀', 'member ≈ ၆၀၀'),
            ('၁ group', '၁ group', '၁–၂ group'),
            ['member QR + meeting scan', 'ကြေးသတိပေး', 'attendance log'],
            ['club app မဟုတ်']),
        [{'f':'club အလုပ်','b':YES,'p':YES,'e':YES,'c':YES},{'f':'meeting QR','b':YES,'p':YES,'e':YES,'c':YES},
         {'f':'member','b':'≈၈၀','p':'≈၂၅၀','e':'≈၆၀၀','c':'ညှိ'}]),
    pricing_product('gym-studio', 'အားကစားခန်း / studio', 'member · class · QR ဝင်မှတ်', False,
        std_tiers('my', '၆၅,၀၀၀', '၉၅,၀၀၀', '၁၄၀,၀၀၀',
            ('၄ ဦး', '၁၀ ဦး', '၂၀ ဦး'), ('member ≈ ၁၅၀', 'member ≈ ၄၀၀', 'member ≈ ၉၀၀'),
            ('၁ studio', '၁ studio', '၁–၂ studio'),
            ['member QR entry', 'class schedule', 'expiry reminder'],
            ['gym software မဟုတ်']),
        [{'f':'studio အလုပ်','b':YES,'p':YES,'e':YES,'c':YES},{'f':'QR entry','b':YES,'p':YES,'e':YES,'c':YES}]),
    pricing_product('event', 'အခမ်းအနား / workshop', 'မှတ်ပုံတင် · QR ticket · scan', False,
        std_tiers('my', '၅၀,၀၀၀', '၈၀,၀၀၀', '၁၂၀,၀၀၀',
            ('၃ ဦး', '၈ ဦး', '၁၅ ဦး'), ('participant ≈ ၅၀၀/လ', '≈ ၂,၀၀၀', '≈ ၅,၀၀၀'),
            ('၁ organizer', '၁', '၁–၂'),
            ['QR ticket', 'arrival scan', 'participant list'],
            ['event platform မဟုတ်']),
        [{'f':'event အလုပ်','b':YES,'p':YES,'e':YES,'c':YES},{'f':'QR ticket','b':YES,'p':YES,'e':YES,'c':YES}]),
    pricing_product('coop-order', 'အတူဝယ် / hnapyan', 'group order · deposit · ပို့', True,
        std_tiers('my', '၅၅,၀၀၀', '၈၅,၀၀၀', '၁၂၅,၀၀၀',
            ('၄ ဦး', '၁၀ ဦး', '၂၀ ဦး'), ('order ≈ ၃၀၀/လ', '≈ ၁,၀၀၀', '≈ ၃,၀၀၀'),
            ('၁ group', '၁', '၁–၂'),
            ['group order sheet', 'deposit / paid-unpaid', 'delivery update'],
            ['shop POS မဟုတ်']),
        [{'f':'group buy','b':YES,'p':YES,'e':YES,'c':YES},{'f':'deposit track','b':YES,'p':YES,'e':YES,'c':YES}]),
    pricing_product('rental', 'အခန်းငှား / guesthouse', 'booking · deposit · QR check-in', False,
        std_tiers('my', '၆၀,၀၀၀', '၉၀,၀၀၀', '၁၃၀,၀၀၀',
            ('၄ ဦး', '၁၀ ဦး', '၂၀ ဦး'), ('booking ≈ ၂၀၀/လ', '≈ ၆၀၀', '≈ ၁,၅၀၀'),
            ('၁ property', '၁', '၁–၃'),
            ['room calendar', 'deposit reminder', 'guest QR check-in'],
            ['PMS / hotel system မဟုတ်']),
        [{'f':'rental အလုပ်','b':YES,'p':YES,'e':YES,'c':YES},{'f':'QR check-in','b':YES,'p':YES,'e':YES,'c':YES}]),
]

products_en = [
    pricing_product('condo', 'Condo / apartment MC', 'Mgmt fees · visitor QR · members', False,
        std_tiers('en', '55,000', '85,000', '130,000',
            ('3 people', '8 people', '15 people'), ('≈ 150 units', '≈ 400 units', '≈ 800 units'),
            ('1 building', '1 building', '1–2 buildings'),
            ['Members + fee chase', 'Visitor QR', 'Gate log'],
            ['Not a management suite']),
        [{'f':'MC job','b':YES,'p':YES,'e':YES,'c':YES},{'f':'Visitor QR','b':YES,'p':YES,'e':YES,'c':YES}]),
    pricing_product('book-club', 'Book club / hobby club', 'Members · meeting QR · fees', False,
        std_tiers('en', '45,000', '70,000', '100,000',
            ('2 people', '5 people', '10 people'), ('≈ 80 members', '≈ 250 members', '≈ 600 members'),
            ('1 group', '1 group', '1–2 groups'),
            ['Member QR + meeting scan', 'Fee reminders', 'Attendance log'],
            ['Not a club app']),
        [{'f':'Club job','b':YES,'p':YES,'e':YES,'c':YES},{'f':'Meeting QR','b':YES,'p':YES,'e':YES,'c':YES}]),
    pricing_product('gym-studio', 'Gym / yoga / dance studio', 'Members · classes · QR entry', False,
        std_tiers('en', '65,000', '95,000', '140,000',
            ('4 people', '10 people', '20 people'), ('≈ 150 members', '≈ 400 members', '≈ 900 members'),
            ('1 studio', '1 studio', '1–2 studios'),
            ['QR entry', 'Class schedule', 'Expiry reminders'],
            ['Not gym software suite']),
        [{'f':'Studio job','b':YES,'p':YES,'e':YES,'c':YES},{'f':'QR entry','b':YES,'p':YES,'e':YES,'c':YES}]),
    pricing_product('event', 'Events / workshops', 'Sign-up · QR ticket · scan', False,
        std_tiers('en', '50,000', '80,000', '120,000',
            ('3 people', '8 people', '15 people'), ('≈ 500/mo', '≈ 2,000', '≈ 5,000'),
            ('1 organizer', '1', '1–2'),
            ['QR ticket', 'Arrival scan', 'Participant list'],
            ['Not an event platform']),
        [{'f':'Event job','b':YES,'p':YES,'e':YES,'c':YES},{'f':'QR ticket','b':YES,'p':YES,'e':YES,'c':YES}]),
    pricing_product('coop-order', 'Group buy / hnapyan', 'Group order · deposit · delivery', True,
        std_tiers('en', '55,000', '85,000', '125,000',
            ('4 people', '10 people', '20 people'), ('≈ 300 orders/mo', '≈ 1,000', '≈ 3,000'),
            ('1 group', '1', '1–2'),
            ['Group order sheet', 'Deposit / paid-unpaid', 'Delivery update'],
            ['Not a shop POS']),
        [{'f':'Group buy','b':YES,'p':YES,'e':YES,'c':YES},{'f':'Deposit track','b':YES,'p':YES,'e':YES,'c':YES}]),
    pricing_product('rental', 'Room rental / guesthouse', 'Booking · deposit · QR check-in', False,
        std_tiers('en', '60,000', '90,000', '130,000',
            ('4 people', '10 people', '20 people'), ('≈ 200 bookings/mo', '≈ 600', '≈ 1,500'),
            ('1 property', '1', '1–3'),
            ['Room calendar', 'Deposit reminder', 'Guest QR check-in'],
            ['Not a PMS / hotel system']),
        [{'f':'Rental job','b':YES,'p':YES,'e':YES,'c':YES},{'f':'QR check-in','b':YES,'p':YES,'e':YES,'c':YES}]),
]

# Fix f-string typo in gym-studio en matrix
products_en[2] = products_en[2].replace("{f:'QR entry'", "{'f':'QR entry'")

# Insert MY pricing before closing products array
my_price_start = text.index('    products: [', text.index('const my: Copy'))
my_price_end = text.index('    ],\n  },\n  howItWorks:', my_price_start)
my_products_block = text[my_price_start:my_price_end]
if "id: 'condo'" not in my_products_block:
    my_products_block = my_products_block.rstrip() + ',\n' + ',\n'.join(products_my) + '\n'
    text = text[:my_price_start] + my_products_block + text[my_price_end:]

en_price_start = text.index('    products: [', text.index('const en: Copy'))
en_price_end = text.index('    ],\n  },\n  howItWorks:', en_price_start)
en_products_block = text[en_price_start:en_price_end]
if "id: 'condo'" not in en_products_block:
    en_products_block = en_products_block.rstrip() + ',\n' + ',\n'.join(products_en) + '\n'
    text = text[:en_price_start] + en_products_block + text[en_price_end:]

# Update contact niches MY
my_niches = """    niches: [
      'ကြေးကောက်ခံ (၅၀,၀၀၀/လ)',
      'ကွန်ဒို / MC (၅၅,၀၀၀/လ)',
      'စာအုပ်အဖွဲ့ / club (၄၅,၀၀၀/လ)',
      'အတူဝယ် / hnapyan (၅၅,၀၀၀/လ) ★',
      'ဆေးခန်း / ရက်ချိန်း (၆၀,၀၀၀/လ)',
      'အခန်းငှား / guesthouse (၆၀,၀၀၀/လ)',
      'အားကစားခန်း / studio (၆၅,၀၀၀/လ)',
      'ကျူရှင် (၇၀,၀၀၀/လ)',
      'ဖောက်သည် ဆက်သွယ် (၇၀,၀၀၀/လ)',
      'အခမ်းအနား / workshop (၅၀,၀၀၀/လ)',
      'ယာဉ်မောင်း / ပို့သူ (၉၀,၀၀၀/လ)',
      'စားသောက်ဆိုင် (၁၂၀,၀၀၀/လ) ★',
      'ပို့ဆောင်ရေး (၁၅၀,၀၀၀/လ)',
      'ဆိုင်တစ်ခုလုံး (၂၀၀,၀၀၀/လ)',
      'အလုပ် ၂ ခု+ ပေါင်းစပ်ဈေး',
      'အခမဲ့ မေးမြန်း',
      'အခြား',
    ],"""

en_niches = """    niches: [
      'Fee collections (50,000/mo)',
      'Condo / MC (55,000/mo)',
      'Book club / hobby club (45,000/mo)',
      'Group buy / hnapyan (55,000/mo) ★',
      'Clinic / bookings (60,000/mo)',
      'Room rental / guesthouse (60,000/mo)',
      'Gym / studio (65,000/mo)',
      'Tuition (70,000/mo)',
      'Customer contact (70,000/mo)',
      'Events / workshops (50,000/mo)',
      'Drivers / couriers (90,000/mo)',
      'Restaurant (120,000/mo) ★',
      'Delivery / logistics (150,000/mo)',
      'Whole shop (200,000/mo)',
      '2+ jobs combined quote',
      'Free quick question',
      'Other',
    ],"""

text = re.sub(r"    niches: \[\n      'ကြေးကောက်ခံ[^]]+\],", my_niches, text, count=1)
text = re.sub(r"    niches: \[\n      'Fee collections[^]]+\],", en_niches, text, count=1)

# Hero ribbons broaden
text = text.replace("'မြန်မာ ဆိုင်လုပ်ငန်း',", "'မြန်မာ SME · club · MC',", 1)
text = text.replace("'For Myanmar shops',", "'For Myanmar SMEs',", 1)
text = text.replace(
    'ကြေးလိုက်မတောင်းနိုင်၊ တန်းရှည်၊ ရက်ချိန်းရော၊ ပို့ဆောင်အခြေအနေ မသိ',
    'ကြေးလိုက်မတောင်းနိုင်၊ MC ဧည့်သည် ရော၊ club တက်မှတ် ရော၊ group buy sheet ရော',
    1,
)
text = text.replace(
    'Hard to chase fees, long queues, messy bookings, delivery status unknown',
    'Hard to chase fees, messy condo visitor lists, club attendance on paper, group-buy sheets unclear',
    1,
)

path.write_text(text)
print('Done — condo in engines:', "id: 'condo'" in text)
print('condo in pricing:', text.count("id: 'condo'"))