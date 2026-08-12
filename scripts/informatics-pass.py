#!/usr/bin/env python3
"""Embed informatics philosophy + add Myanmar verticals."""
from pathlib import Path
import re

path = Path('src/lib/copy.ts')
text = path.read_text()

# --- Framing: MY hero ---
text = text.replace(
    """  hero: {
    brandSub: 'ဆိုင်အလုပ် ပိတ်နေတာကို Telegram မှာ ချောအောင်',
    ribbons: [
      'တစ်ပတ်အတွင်း စသုံး',
      'စနစ်ကြီး မဝယ်ရ',
      'ဖုန်းထဲက Telegram',
      'မြန်မာ SME · club · MC',
    ],
    badge: 'အဓိက သတင်း',
    headline: 'ဘယ်သူပေးပြီး၊ မှာဘယ်မှာ၊ ပစ္စည်းကုန်ပြီလား — ရှင်းအောင် ကူညီပေးမယ်။',
    body1:
      'ကြေးလိုက်မတောင်းနိုင်၊ MC ဧည့်သည် ရော၊ club တက်မှတ် ရော၊ group buy sheet ရော — ဒီလိုနေ့စဉ် အလုပ်ပိတ်နေတာတွေကို ကူညီပေးပါတယ်။ စနစ်ကြီး ဝယ်စရာ မလို၊ သင်တန်းကြာကြာ မလို။ သင်သုံးနေတဲ့ Telegram မှာပဲ စသုံးနိုင်ပါတယ်။',
    body2Before: 'နေ့စဉ်',
    body2Mid: 'မှာ အလုပ်လုပ်ပြီး စာရင်းကို',
    body2After:
      'မှာ သင်ကိုယ်တိုင် ထားရှိ ပိုင်ဆိုင်ပါသည်။ ဆိုင်လုပ်နည်းအတိုင်း ပြင်ဆင်ပေးပြီး တစ်ပတ်အတွင်း စသုံးနိုင်အောင် ကူညီပါတယ်။',""",
    """  hero: {
    brandSub: 'ရယူ · မှတ် · အစီရင်ခံ — Telegram bot ပေါ့ပါး',
    ribbons: [
      'တစ်ပတ်အတွင်း စသုံး',
      'စနစ်ကြီးရဲ့ ရလဒ် · ဖုန်းမှာ',
      'အစီရင်ခံ အဆင်သင့်',
      'မြန်မာ လုပ်ငန်း · များများ ကိုက်',
    ],
    badge: 'အဓိက သတင်း',
    headline: 'ဘယ်သူပေးပြီး၊ မှာဘယ်မှာ၊ ဒီနေ့ ဘယ်လောက်ရောင်း — စာရင်းရှင်း · အစီရင်ခံ အဆင်သင့်။',
    body1:
      'စနစ်ကြီး ဝယ်ရ၊ ကွန်ပျူတာမှာပဲ သုံးရ၊ သင်တန်းကြာ — မြန်မာဆိုင်အများစု မလိုက်နိုင်။ PocketX က လိုတဲ့အလုပ်တစ်ခုချင်းကို Telegram bot ပေါ့ပါးနဲ့ တပ်ဆင်ပေးပါတယ်။ အချက်အလက် ရယူ → စာရင်းမှတ် → အစီရင်ခံထုတ် — စနစ်ကြီးလို ရလဒ်ကို ဖုန်းမှာ ရပါတယ်။',
    body2Before: 'နေ့စဉ်',
    body2Mid: 'မှာ အလုပ်လုပ်ပြီး စာရင်းကို',
    body2After:
      'မှာ သင်ပိုင်ဆိုင် · အစီရင်ခံ အဆင်သင့်။ လုပ်ငန်းအမျိုးအစား များများ ကိုက်အောင် တည်ဆောက်ထားပါတယ် — ရွေး · တပ် · ရောင်းမြန်။',""",
)

text = text.replace(
    """      {
        q: 'ဘာလဲ',
        a: 'ဆိုင်အလုပ် ပိတ်နေတဲ့နေရာကို Telegram နဲ့ စာရင်းဇယားနဲ့ ကူညီပေးတဲ့ ဝန်ဆောင်မှု',
      },
      {
        q: 'ဘာကြောင့်',
        a: 'စနစ်ကြီး မဝယ်ရ၊ သင်တန်း မကြာ၊ တစ်ပတ်အတွင်း စသုံးနိုင်',
      },
      {
        q: 'ဘယ်လောက်',
        a: 'အလုပ်တစ်ခု ရွေး · လစဉ်ကြေး တစ်ခုတည်း — စတင်ဈေးမှ ကြည့်နိုင်',
      },
    ],
    pledgeLabel: 'ကတိကဝတ်',
    pledge: 'နည်းပညာက ဆိုင်ကို ကူညီရမယ် — အလုပ်ပိတ်စေတဲ့အရာ မဖြစ်ရ။',
  },
  why: {
    title: 'ဘာကြောင့်လဲ',
    hint: 'အကွက်နှိပ်၍ နှိုင်းယှဉ်ရန်',
    intro:
      'စာရင်းရှင်းချင်၊ သတိပေးလိုက်ချင်၊ အလုပ်အခြေအနေ မြင်ချင်တယ် — ဒါပေမဲ့ စနစ်ကြီး ဝယ်ရ၊ သင်တန်းကြာ၊ ဝန်ထမ်း မလိုက်နိုင်။ PocketX က လိုတဲ့ အလုပ်တစ်ခုချင်းကို Telegram နဲ့ စာရင်းဇယားပေါ်မှာ တပ်ဆင်ပေးပါတယ်။',
    ourWay: 'ကျွန်ုပ်တို့နည်း',
    oldWay: 'စနစ်ကြီး ဝယ်နည်း',
    panels: [
      {
        bad: 'စနစ်ကြီး တစ်ခုလုံး ဝယ် — ဈေးကြီး၊ စသုံးရ ကြာ',
        good: 'ပိတ်နေတဲ့ အလုပ်တစ်ခုပဲ တပ်ဆင် — တစ်ပတ်အတွင်း စသုံး',
      },
      {
        bad: 'အက်ပ်အသစ် ဆောက် · အလုပ်လမ်း အားလုံး ပြောင်းခိုင်း',
        good: 'သင်သုံးနေတဲ့ Telegram မှာပဲ မှာ၊ လွှဲ၊ သတိပေး',
      },
      {
        bad: 'စနစ်သစ် သင်ပေးရ — မေ့၊ မသုံးဖြစ်',
        good: 'နေ့စဉ်သုံးနေတဲ့ အက်ပ် · သင်တန်း မကြာ · ဝန်ထမ်း လက်ခံလွယ်',
      },
      {
        bad: 'ဆိုင်လုပ်နည်းကို စနစ်အလိုက် ပြောင်းခိုင်း',
        good: 'သင့်ဆိုင်လုပ်နည်းအတိုင်း ပြင်ဆင် — လမ်းမဖျက်',
      },
    ],
  },""",
    """      {
        q: 'ဘာလဲ',
        a: 'အလုပ်တစ်ခုချင်း Telegram bot — အချက်အလက် ရယူ · မှတ် · အစီရင်ခံ အဆင်သင့်',
      },
      {
        q: 'ဘာကြောင့်',
        a: 'စနစ်ကြီးရဲ့ ရလဒ်ကို ဖုန်းမှာ · သင်တန်း မကြာ · တစ်ပတ်အတွင်း စသုံး',
      },
      {
        q: 'ဘယ်လောက်',
        a: 'လုပ်ငန်းရွေး · လစဉ်ကြေး တစ်ခုတည်း — စတင်ဈေးမှ · ကြီးလာရင် တက်',
      },
    ],
    pledgeLabel: 'ကတိကဝတ်',
    pledge: 'နည်းပညာက ဆိုင်အလုပ် မြန် · စာရင်းရှင်းအောင် ကူညီရမယ် — အလုပ်ပိတ်စေတဲ့အရာ မဖြစ်ရ။',
  },
  why: {
    title: 'ဘာကြောင့်လဲ',
    hint: 'အကွက်နှိပ်၍ နှိုင်းယှဉ်ရန်',
    intro:
      'စာရင်းရှင်းချင်၊ သတိပေးလိုက်ချင်၊ နေ့စဉ်/လစဉ် အစီရင်ခံ မြင်ချင်တယ် — ဒါပေမဲ့ စနစ်ကြီး ဈေးကြီး၊ ကွန်ပျူတာအခြေခံ၊ သင်တန်းကြာ။ PocketX က သတင်းစာရင်း အင်ဂျင်နီယာနည်း — ရယူ → မှတ် → အကြောင်းကြား → အစီရင်ခံ — ကို Telegram bot ပေါ့ပါးနဲ့ တပ်ဆင်ပေးပါတယ်။ လုပ်ငန်းအမျိုးအစား များရင် ပိုကိုက် · ရောင်းမြန်။',
    ourWay: 'ကျွန်ုပ်တို့နည်း',
    oldWay: 'စနစ်ကြီး ဝယ်နည်း',
    panels: [
      {
        bad: 'စနစ်ကြီး တစ်ခုလုံး ဝယ် — ဈေးကြီး၊ စသုံးရ ကြာ',
        good: 'အလုပ်တစ်ခုပဲ Telegram bot — တစ်ပတ်အတွင်း စသုံး · ရလဒ်တူ',
      },
      {
        bad: 'ကွန်ပျူတာ / အက်ပ်အသစ် · ဝန်ထမ်း မလိုက်နိုင်',
        good: 'ဖုန်းထဲ Telegram မှာပဲ ရယူ · မှတ် · အစီရင်ခံ',
      },
      {
        bad: 'စာရင်း ရှိပေမဲ့ အစီရင်ခံ မထွက် · အလုပ်မမြန်',
        good: 'နေ့စဉ်/လစဉ် အစီရင်ခံ အဆင်သင့် — လုပ်ငန်း မြန်အောင်',
      },
      {
        bad: 'လုပ်ငန်းအမျိုးအစား တစ်ခုတည်းသာ ကိုက်',
        good: 'ဆိုင် · ယာဉ် · club · MC · ပို့ — များများ ကိုက် · ရောင်းမြန်',
      },
    ],
  },""",
)

text = text.replace(
    """  engines: {
    title: 'ဘယ်အလုပ်တွေ ကူပေးလဲ',
    hint: 'ဆိုင် · club · MC · အတူဝယ် — SME အလုပ်အလိုက်',
    intro:
      'ဆိုင်၊ ယာဉ်အဖွဲ့၊ အစားပို့၊ club၊ MC — သင့်လုပ်ငန်းရွေးပြီး နေ့စဉ် ဘယ်လိုလည်မလဲ ဖတ်ပါ။ အက်ပ်အသစ် မဆောက်ရပါ။ Telegram မှာပဲ စသုံးအောင် တပ်ဆင်ပေးပါတယ်။',
    marketLabel: 'မြန်မာ SME ဈေးကွက်',
    marketIntro:
      'ရန်ကုန်/မန္တလေး ဆိုင်လုပ်ငန်း၊ ကွန်ဒို MC၊ စာအုပ်အဖွဲ့၊ အခန်းငှား၊ အတူဝယ်အဖွဲ့ — စနစ်ကြီး ဝယ်ဖို့ မကြီးသေးပေမဲ့ စာရင်း/သတိပေး/QR လိုတဲ့ လုပ်ငန်းတွေ များပါတယ်။ PocketX က Telegram + စာရင်းဇယားပေါ်မှာ ပေါ့ပါးအလုပ်တစ်ခုချင်း တပ်ဆင်ပေးပါတယ်။',""",
    """  engines: {
    title: 'ဘယ်အလုပ်တွေ ကူပေးလဲ',
    hint: 'လုပ်ငန်းအမျိုးအစား များများ · bot တစ်ခုချင်း',
    intro:
      'ဆိုင်၊ ယာဉ်၊ အစားပို့၊ club၊ MC၊ ဆေးဆိုင်၊ အလှပြင် — သင့်လုပ်ငန်းရွေးပါ။ တစ်ခုချင်း Telegram bot · ရယူ → မှတ် → အစီရင်ခံ။ စနစ်ကြီး မဝယ်ရ · ဖုန်းမှာပဲ စသုံး။',
    marketLabel: 'မြန်မာ လုပ်ငန်း ဈေးကွက်',
    marketIntro:
      'ရန်ကုန်/မန္တလေး SME အများစု စနစ်ကြီး မဝယ်နိုင်ပေမဲ့ စာရင်းရှင်း · သတိပေး · အစီရင်ခံ လိုပါတယ်။ PocketX က သတင်းစာရင်း အင်ဂျင်နီယာ — အချက်အလက်ကို ဖုန်းမှ ရယူ၊ စာရင်းဇယားမှာ မှတ်၊ အစီရင်ခံ အဆင်သင့် — bot ပေါ့ပါးနဲ့ တပ်ဆင်ပေးပါတယ်။ လုပ်ငန်းအမျိုးအစား များလေ ရောင်းမြန်လေ။',""",
)

# Append market points for new verticals if missing
my_new_points = [
    'ဆေးဆိုင် — သက်တမ်းကုန် · ပစ္စည်းစာရင်း · ရောင်းအား အစီရင်ခံ',
    'အလှပြင် / ဆံပင်ညှပ် — ရက်ချိန်း ထပ် · အဖွဲ့ဝင် ကြေး',
    'အဝတ်လျှော် — လက်မှတ် · အခြေအနေ · ထုတ်ယူ သတိပေး',
    'သောက်ရေသန့်အိမ်အရောက်ပို့ — လမ်းကြောင်း · ဖယ်ရီ · လစဉ် မှာ',
    'အစုစုငွေ — ဘယ်သူပေးပြီး · သတိပေး · လစဉ် ချုပ်',
]
for p in my_new_points:
    if p not in text:
        text = text.replace(
            "      'အစားအသောက် ပို့ခြင်း — မီးဖို → ပို့သူ → ဝယ်သူ တစ်ဆက်တည်း',\n",
            "      'အစားအသောက် ပို့ခြင်း — မီးဖို → ပို့သူ → ဝယ်သူ တစ်ဆက်တည်း',\n"
            f"      '{p}',\n",
            1,
        )

text = text.replace(
    """    toolsNote:
      'စာရင်းဇယား — ယနေ့ Google Sheets ပိုင်ဆိုင်။ နေရာမှတ်၊ form၊ calendar တို့နဲ့ ချိတ်ဆက် ထပ်တိုးနိုင်ပါတယ် (အက်ပ်အသစ် မဆောက်)။',
    ask: 'ဒီအလုပ်အတွက် မေးရန်',
    footer:
      'စာရင်းမှာ မပါသေးဘူးလား။ သင့်ဆိုင်အလုပ်အတိုင်း ပြင်ဆင်ပေးနိုင်ပါတယ် — Telegram မှ မေးပါ။',
    painLabel: 'အလုပ်ပိတ်နေတဲ့နေရာ',
    flowLabel: 'နေ့စဉ် လည်ပတ်ပုံ',
    getsLabel: 'သင် ရရှိမည်',
    whyLabel: 'ဘာကြောင့် ပေါ့ပါးသလဲ',""",
    """    toolsNote:
      'သတင်းစာရင်း အင်ဂျင်နီယာ — ရယူ → မှတ် → အစီရင်ခံ။ ယနေ့ Google Sheets ပိုင်ဆိုင်။ နေရာမှတ် / form ထပ်ချိတ်နိုင် · အက်ပ်အသစ် မဆောက်။',
    ask: 'ဒီအလုပ်အတွက် မေးရန်',
    footer:
      'စာရင်းမှာ မပါသေးဘူးလား။ လုပ်ငန်းအမျိုးအစား ပိုများအောင် တည်ဆောက်နေပါတယ် — Telegram မှ မေးပါ။',
    painLabel: 'အလုပ်ပိတ်နေတဲ့နေရာ',
    flowLabel: 'နေ့စဉ် လည်ပတ်ပုံ',
    getsLabel: 'သင် ရရှိမည်',
    whyLabel: 'ရယူ · မှတ် · အစီရင်ခံ',""",
)

text = text.replace(
    """    intro:
      '① သင့်ဆိုင်အလုပ် ရွေးပါ ② အဖွဲ့ဘယ်လောက်ကြီးလဲ ရွေးပါ ③ လစဉ်ကြေး တစ်ခုတည်း ပေးပါ။ တပ်ဆင်ခ သီးခြား မကောက်ပါ။ စနစ်ကြီး ဝယ်စရာ မလို — လိုတဲ့ အလုပ်တစ်ခုချင်း ကူညီပေးပါတယ်။',""",
    """    intro:
      '① လုပ်ငန်းရွေးပါ ② အဖွဲ့အရွယ် ရွေးပါ ③ လစဉ်ကြေး တစ်ခုတည်း။ Telegram bot ပေါ့ပါး — စနစ်ကြီးရဲ့ စာရင်း/သတိပေး/အစီရင်ခံ ရလဒ်ကို ဖုန်းမှာ။ တပ်ဆင်ခ သီးခြား မကောက်။',""",
    1,
)

text = text.replace(
    """    tagline:
      'ဆိုင်အလုပ် ပိတ်နေတာကို တစ်ပတ်အတွင်း ကူညီ — စနစ်ကြီးမဝယ်ရ၊ သင်တန်းမကြာ။',""",
    """    tagline:
      'ရယူ · မှတ် · အစီရင်ခံ — Telegram bot ပေါ့ပါး · တစ်ပတ်အတွင်း စသုံး။',""",
    1,
)

# --- Framing: EN ---
text = text.replace(
    """  hero: {
    brandSub: 'Smoother shop work on Telegram',
    ribbons: [
      'Live in about a week',
      'No heavy software to buy',
      'On Telegram you already use',
      'For Myanmar SMEs',
    ],
    badge: 'Lead story',
    headline: 'Who paid, where is the order, are you out of stock — we help you see it clearly.',
    body1:
      'Hard to chase fees, messy condo visitor lists, club attendance on paper, group-buy sheets unclear — we fix those everyday stuck jobs. No heavy software to buy. No long training. Your team uses Telegram they already know.',
    body2Before: 'Work day to day on',
    body2Mid: 'and keep your records in',
    body2After:
      '— you own them. We fit how your shop already works and usually get you live in about a week.',""",
    """  hero: {
    brandSub: 'Collect · log · report — light Telegram bots',
    ribbons: [
      'Live in about a week',
      'Big-system results on your phone',
      'Report-ready records',
      'Built to sell fast in Myanmar',
    ],
    badge: 'Lead story',
    headline: 'Who paid, where is the order, what sold today — clear lists, report-ready.',
    body1:
      'Heavy shop software is costly, desktop-first, and slow to train. PocketX engineers light Telegram bots per job: collect → log → notify → report — the same operational results on the phone your team already uses.',
    body2Before: 'Work day to day on',
    body2Mid: 'and keep report-ready records in',
    body2After:
      '— you own them. More verticals means faster fit. Pick · install · go live in about a week.',""",
)

text = text.replace(
    """      {
        q: 'What',
        a: 'Help for stuck shop work using Telegram and a simple spreadsheet you own',
      },
      {
        q: 'Why',
        a: 'No heavy software, little training, live in about a week',
      },
      {
        q: 'How much',
        a: 'Pick one job · one monthly fee — start from the smallest plan',
      },
    ],
    pledgeLabel: 'Pledge',
    pledge: 'Tech should help the shop — never be the thing that stalls it.',
  },
  why: {
    title: 'Why this',
    hint: 'Tap a panel to compare',
    intro:
      'You want clear lists, reminders, and to see what is going on — but big shop software is expensive, slow to start, and hard for staff. PocketX sets up one stuck job at a time on Telegram and a spreadsheet you own.',
    ourWay: 'Our way',
    oldWay: 'Buying a big system',
    panels: [
      {
        bad: 'Buy a big all-in-one system — costly, months to start',
        good: 'Fix only the stuck job — live in about a week',
      },
      {
        bad: 'Build a new app · force everyone to change how they work',
        good: 'Order, hand off, and alert on Telegram you already use',
      },
      {
        bad: 'Retrain everyone — forgotten logins, tools left unused',
        good: 'Apps you open daily · little training · staff actually use it',
      },
      {
        bad: 'Make the shop bend to the software',
        good: 'We fit how your shop already works — we do not break it',
      },
    ],
  },""",
    """      {
        q: 'What',
        a: 'One light Telegram bot per job — collect, log, report-ready',
      },
      {
        q: 'Why',
        a: 'Big-system results on your phone · little training · live in a week',
      },
      {
        q: 'How much',
        a: 'Pick a vertical · one monthly fee — start small, grow when ready',
      },
    ],
    pledgeLabel: 'Pledge',
    pledge: 'Tech should make ops faster and reports clearer — never stall the shop.',
  },
  why: {
    title: 'Why this',
    hint: 'Tap a panel to compare',
    intro:
      'You want clear lists, reminders, and daily/monthly reports — but heavy systems are expensive and desktop-first. PocketX uses informatics engineering: collect → log → notify → report — delivered as light Telegram bots. More verticals = faster sell-fit for Myanmar businesses.',
    ourWay: 'Our way',
    oldWay: 'Buying a big system',
    panels: [
      {
        bad: 'Buy a big all-in-one — costly, months to start',
        good: 'One Telegram bot per job — live in a week · same result',
      },
      {
        bad: 'Desktop software · staff will not follow',
        good: 'Collect · log · report on the phone they already use',
      },
      {
        bad: 'Lists exist but no report · ops stay slow',
        good: 'Report-ready records — improve how the day runs',
      },
      {
        bad: 'Only one industry template',
        good: 'Many verticals — shop · fleet · club · MC · delivery — sell fast',
      },
    ],
  },""",
)

text = text.replace(
    """  engines: {
    title: 'What we help with',
    hint: 'Shop · club · MC · group buy — by SME job',
    intro:
      'Shop, vehicle fleet, food delivery, club, MC — pick your business and read how a normal day runs. No new app to build. We set it up on Telegram so you can start in about a week.',
    marketLabel: 'Myanmar SME market',
    marketIntro:
      'Shops, condo MCs, book clubs, guesthouses, group-buy circles — many Myanmar SMEs are too small for heavy software but need lists, reminders, and QR check-in. PocketX sets up one light job at a time on Telegram + a spreadsheet you own.',""",
    """  engines: {
    title: 'What we help with',
    hint: 'Many verticals · one light bot each',
    intro:
      'Shop, fleet, food delivery, club, MC, pharmacy, salon — pick your business. One Telegram bot: collect → log → report. No heavy system. Live on the phone in about a week.',
    marketLabel: 'Myanmar business market',
    marketIntro:
      'Most Myanmar SMEs cannot buy heavy systems but need clear lists, alerts, and reports. PocketX engineers informatics light: capture on Telegram, store in a spreadsheet you own, report when you need it. More verticals = faster fit and sell.',""",
)

en_new_points = [
    'Pharmacy — expiry · stock · sales report',
    'Salon / barber — double bookings · member fees',
    'Laundry — ticket · status · pickup alerts',
    'Purified water bottles — routes · ferry · monthly orders',
    'Group savings (a-kyoe) — who paid · reminders · monthly close',
]
for p in en_new_points:
    if p not in text:
        text = text.replace(
            "      'Food delivery — kitchen, driver, and customer in one flow',\n",
            "      'Food delivery — kitchen, driver, and customer in one flow',\n"
            f"      '{p}',\n",
            1,
        )

text = text.replace(
    """    toolsNote:
      'Your spreadsheet — Google Sheets today. Add location, forms, or calendar updates later (no new app to build).',
    ask: 'Ask about this job',
    footer:
      'Not listed? We can fit your shop’s work — ask on Telegram.',
    painLabel: 'Where work gets stuck',
    flowLabel: 'Day-to-day flow',
    getsLabel: 'You get',
    whyLabel: 'Why this stays lightweight',""",
    """    toolsNote:
      'Informatics light — collect → log → report. You own Google Sheets today. Add location or forms later · no new app.',
    ask: 'Ask about this job',
    footer:
      'Not listed? We keep adding verticals — ask on Telegram.',
    painLabel: 'Where work gets stuck',
    flowLabel: 'Day-to-day flow',
    getsLabel: 'You get',
    whyLabel: 'Collect · log · report',""",
)

# EN pricing intro + tagline
text = text.replace(
    "Pick one shop job · pick your team size · one monthly fee. No separate setup fee. No heavy software — we help with one stuck job at a time.",
    "Pick a vertical · pick team size · one monthly fee. Light Telegram bot — big-system list/alert/report results on your phone. No separate setup fee.",
    1,
)
# try alternate EN pricing intro if different
text = re.sub(
    r"(const en: Copy = \{[\s\S]*?pricing: \{[\s\S]*?intro:\n\s*)'[^']+',",
    lambda m: m.group(1)
    + "'① Pick your business ② Pick team size ③ One monthly fee. Light Telegram bot — collect, log, report-ready on your phone. No separate setup fee.',",
    text,
    count=1,
)

text = text.replace(
    "Help for stuck shop work in about a week — no heavy software, little training.",
    "Collect · log · report — light Telegram bots · live in about a week.",
    1,
)

# --- Soften/strengthen existing MY whyLight with informatics closer ---
INFORMATICS_MY = ' ရယူ → မှတ် → အစီရင်ခံ အဆင်သင့် — စနစ်ကြီးရဲ့ ရလဒ်ကို ဖုန်းထဲ Telegram မှာ။'
INFORMATICS_EN = ' Collect → log → report-ready — big-system results on Telegram on your phone.'

def append_closer(section_start_marker, section_end_marker, closer, already):
    global text
    start = text.find(section_start_marker)
    if start < 0:
        return
    end = text.find(section_end_marker, start)
    block = text[start:end]
    # append to whyLight strings that don't already have the closer key phrase
    def repl(m):
        s = m.group(0)
        if already in s:
            return s
        # insert before closing quote of whyLight
        return s[:-1] + closer + "'"
    new_block = re.sub(
        r"whyLight:\n\s*'[^']*'",
        repl,
        block,
    )
    text = text[:start] + new_block + text[end:]

append_closer(
    "const my: Copy = {",
    "\nconst en: Copy = {",
    INFORMATICS_MY,
    'ရယူ → မှတ်',
)
append_closer(
    "const en: Copy = {",
    "\nexport const copy",
    INFORMATICS_EN,
    'Collect → log',
)

# --- New engine items MY + EN ---
NEW_MY = """
      {
        id: 'pharmacy',
        trade: 'ဆေးဆိုင်',
        kind: 'ဆိုင်',
        segment: 'shop',
        problem: 'သက်တမ်းကုန် · ပစ္စည်းစာရင်း · ရောင်းအား မရှင်း',
        hook: 'စာရင်း · သက်တမ်းသတိပေး · နေ့စဉ် ရောင်းအား အစီရင်ခံ',
        whyLight:
          'ဆေးဆိုင်စနစ်ကြီး မဝယ်ရပါ။ ပစ္စည်းစာရင်း၊ သက်တမ်းနီး သတိပေး၊ နေ့စဉ် ရောင်းအား — Telegram + စာရင်းဇယား။ ရယူ → မှတ် → အစီရင်ခံ အဆင်သင့် — စနစ်ကြီးရဲ့ ရလဒ်ကို ဖုန်းထဲ Telegram မှာ။',
        flow: [
          'ပစ္စည်း ဝင်/ထွက် မှတ်ပါ',
          'သက်တမ်းနီး သတိပေး',
          'ရောင်းအား နေ့စဉ် မှတ်',
          'လစဉ် အစီရင်ခံ ပိတ်',
        ],
        gets: [
          'ပစ္စည်းစာရင်း ရှင်း',
          'သက်တမ်းနီး အကြောင်းကြား',
          'နေ့စဉ် ရောင်းအား စာရင်း',
          'လစဉ် အစီရင်ခံ — သင်ပိုင်ဆိုင်',
        ],
        priceFrom: '၇၀,၀၀၀',
      },
      {
        id: 'salon',
        trade: 'အလှပြင် / ဆံပင်ညှပ်',
        kind: 'ရက်ချိန်း',
        segment: 'office',
        problem: 'ရက်ချိန်း ထပ် · အဖွဲ့ဝင် ကြေး · ဘယ်သူလာမလဲ မသိ',
        hook: 'ရက်ချိန်း · သတိပေး · အဖွဲ့ဝင် ကြေး — အက်ပ်မဆောက်',
        whyLight:
          'salon အက်ပ်ကြီး မလိုပါ။ ရက်ချိန်း၊ သတိပေး၊ အဖွဲ့ဝင် ကြေးမှတ် — Telegram မှာပဲ။ ရယူ → မှတ် → အစီရင်ခံ အဆင်သင့် — စနစ်ကြီးရဲ့ ရလဒ်ကို ဖုန်းထဲ Telegram မှာ။',
        flow: [
          'ရက်ချိန်း မှတ်ပါ',
          'လာမည့်နေ့ သတိပေး',
          'အဖွဲ့ဝင် ကြေး မှတ်',
          'နေ့စဉ် / လစဉ် ချုပ်',
        ],
        gets: [
          'ရက်ချိန်း မထပ်အောင်',
          'လာမည့်နေ့ သတိပေး',
          'အဖွဲ့ဝင် ကြေး စာရင်း',
          'နေ့စဉ် လုပ်ငန်း အစီရင်ခံ',
        ],
        priceFrom: '၅၅,၀၀၀',
      },
      {
        id: 'laundry',
        trade: 'အဝတ်လျှော်',
        kind: 'ဆိုင်',
        segment: 'shop',
        problem: 'လက်မှတ် ပျောက် · အခြေအနေ မသိ · ထုတ်ယူ မကြား',
        hook: 'လက်မှတ် · အခြေအနေ · ထုတ်ယူ သတိပေး — Telegram',
        whyLight:
          'အဝတ်လျှော်စနစ်ကြီး မဝယ်ရပါ။ လက်မှတ်နံပါတ်၊ အခြေအနေ၊ ထုတ်ယူ သတိပေး — Telegram + စာရင်းဇယား။ ရယူ → မှတ် → အစီရင်ခံ အဆင်သင့် — စနစ်ကြီးရဲ့ ရလဒ်ကို ဖုန်းထဲ Telegram မှာ။',
        flow: [
          'လက်မှတ် ဖွင့် · ပစ္စည်း မှတ်',
          'အခြေအနေ ပြင်ပါ (ဆေး/ခြောက်/ပြီး)',
          'ထုတ်ယူ သတိပေး',
          'နေ့စဉ် လက်မှတ် ချုပ်',
        ],
        gets: [
          'လက်မှတ် မှတ်တမ်း',
          'အခြေအနေ ရှင်း',
          'ထုတ်ယူ သတိပေး',
          'နေ့စဉ် အစီရင်ခံ',
        ],
        priceFrom: '၅၀,၀၀၀',
      },
      {
        id: 'water-delivery',
        trade: 'သောက်ရေသန့်အိမ်အရောက်ပို့',
        kind: 'ပို့',
        segment: 'fleet',
        problem: 'မီနီစက်ရုံ · ပုလင်းပို့ · ဖယ်ရီလမ်း · ဘယ်အိမ် ရောက်ပြီး မသိ',
        hook: 'သောက်ရေသန့်အိမ်အရောက်ပို့ · လမ်း/ဖယ်ရီ · ပို့ပြီး — delivery module တစ်မျိုး',
        whyLight:
          'ပို့ဆောင်စနစ်ကြီး မဝယ်ရပါ။ သောက်ရေသန့်အိမ်အရောက်ပို့ လုပ်ငန်းများက ပုလင်းပို့ · ကား/ဖယ်ရီ လမ်းကြောင်း · လစဉ် မှာ — Telegram + စာရင်းဇယား။ အစားပို့ module လိုပဲ ပို့ခြင်း မိသားစုထဲက တစ်ခု။ ရယူ → မှတ် → အစီရင်ခံ အဆင်သင့် — စနစ်ကြီးရဲ့ ရလဒ်ကို ဖုန်းထဲ Telegram မှာ။',
        flow: [
          'လစဉ် / နေ့စဉ် မှာယူ + ပုလင်း အရေအတွက်',
          'လမ်းကြောင်း ခွဲ (ကား / ဖယ်ရီ) · ပို့သူ လက်ခံ',
          'ပို့ပြီး မှတ် · ဖောက်သည် အကြောင်းကြား',
          'နေ့စဉ် ပို့ချုပ် · ပုလင်း စာရင်း',
        ],
        gets: [
          'မှာယူ / လမ်းကြောင်း စာရင်း',
          'ပို့သူ + ဖယ်ရီ/ကား ခွဲ',
          'ပုလင်း ပို့ပြီး မှတ်တမ်း',
          'နေ့စဉ် အစီရင်ခံ',
        ],
        priceFrom: '၆၅,၀၀၀',
      },
      {
        id: 'chit-fund',
        trade: 'အစုစုငွေ',
        kind: 'ကြေး',
        segment: 'office',
        problem: 'ဘယ်သူပေးပြီး · သတိပေး · လစဉ် ချုပ် ရော',
        hook: 'ပေးပြီး/မပေး · သတိပေး · လစဉ် ချုပ် — ရှင်း',
        whyLight:
          'ငွေစုအက်ပ် မလိုပါ။ အဖွဲ့ဝင်၊ ပေးပြီး/မပေး၊ သတိပေး၊ လစဉ် ချုပ် — Telegram + စာရင်းဇယား။ ရယူ → မှတ် → အစီရင်ခံ အဆင်သင့် — စနစ်ကြီးရဲ့ ရလဒ်ကို ဖုန်းထဲ Telegram မှာ။',
        flow: [
          'အဖွဲ့ဝင် / အလှည့် စာရင်း',
          'ပေးပြီး မှတ် · မပေး သတိပေး',
          'အလှည့် ထုတ်ပေး မှတ်',
          'လစဉ် ချုပ် · အစီရင်ခံ',
        ],
        gets: [
          'ပေးပြီး/မပေး ရှင်း',
          'သတိပေး အလိုအလျောက်',
          'အလှည့် မှတ်တမ်း',
          'လစဉ် အစီရင်ခံ',
        ],
        priceFrom: '၄၅,၀၀၀',
      },"""

NEW_EN = """
      {
        id: 'pharmacy',
        trade: 'Pharmacy',
        kind: 'Shop',
        segment: 'shop',
        problem: 'Expiry · stock · sales unclear',
        hook: 'Stock · expiry alerts · daily sales report',
        whyLight:
          'No pharmacy system to buy. Stock list, expiry alerts, daily sales — Telegram + spreadsheet. Collect → log → report-ready — big-system results on Telegram on your phone.',
        flow: [
          'Log stock in / out',
          'Expiry-near alerts',
          'Log daily sales',
          'Close monthly report',
        ],
        gets: [
          'Clear stock list',
          'Expiry-near notices',
          'Daily sales list',
          'Monthly report you own',
        ],
        priceFrom: '70,000',
      },
      {
        id: 'salon',
        trade: 'Salon / barber',
        kind: 'Booking',
        segment: 'office',
        problem: 'Double bookings · member fees · who comes today',
        hook: 'Book · remind · member fees — no new app',
        whyLight:
          'No salon app to buy. Bookings, reminders, member fees — on Telegram. Collect → log → report-ready — big-system results on Telegram on your phone.',
        flow: [
          'Log appointment',
          'Day-before reminder',
          'Log member fees',
          'Daily / monthly close',
        ],
        gets: [
          'Fewer double bookings',
          'Day-before reminders',
          'Member fee list',
          'Daily ops report',
        ],
        priceFrom: '55,000',
      },
      {
        id: 'laundry',
        trade: 'Laundry',
        kind: 'Shop',
        segment: 'shop',
        problem: 'Lost tickets · status unknown · pickup not told',
        hook: 'Ticket · status · pickup alert — on Telegram',
        whyLight:
          'No laundry system to buy. Ticket number, status, pickup alert — Telegram + spreadsheet. Collect → log → report-ready — big-system results on Telegram on your phone.',
        flow: [
          'Open ticket · log items',
          'Update status (wash/dry/done)',
          'Pickup alert',
          'Daily ticket close',
        ],
        gets: [
          'Ticket log',
          'Clear status',
          'Pickup alerts',
          'Daily report',
        ],
        priceFrom: '50,000',
      },
      {
        id: 'water-delivery',
        trade: 'Purified water delivery',
        kind: 'Delivery',
        segment: 'fleet',
        problem: 'Mini-factory · bottle drops · ferry routes · who got delivery',
        hook: 'Purified bottles · road/ferry · delivered — a delivery-module variant',
        whyLight:
          'No heavy delivery system. Myanmar purified-water mini-factories ship bottles by truck and ferry — order list, route assign, delivered log on Telegram + spreadsheet. Same family as food delivery. Collect → log → report-ready — big-system results on Telegram on your phone.',
        flow: [
          'Monthly / daily orders + bottle count',
          'Assign route (truck / ferry) · driver accepts',
          'Mark delivered · alert customer',
          'Daily close · bottle ledger',
        ],
        gets: [
          'Order / route list',
          'Driver + ferry/truck assign',
          'Bottle delivered log',
          'Daily report',
        ],
        priceFrom: '65,000',
      },
      {
        id: 'chit-fund',
        trade: 'Group savings (a-kyoe)',
        kind: 'Fees',
        segment: 'office',
        problem: 'Who paid · reminders · monthly close messy',
        hook: 'Paid/unpaid · remind · monthly close — clear',
        whyLight:
          'No savings app needed. Members, paid/unpaid, reminders, monthly close — Telegram + spreadsheet. Collect → log → report-ready — big-system results on Telegram on your phone.',
        flow: [
          'Member / round list',
          'Mark paid · unpaid reminder',
          'Log payout round',
          'Monthly close · report',
        ],
        gets: [
          'Paid/unpaid clear',
          'Auto reminders',
          'Payout round log',
          'Monthly report',
        ],
        priceFrom: '45,000',
      },"""

if "id: 'pharmacy'" not in text.split('engines:', 1)[1].split('samples:', 1)[0]:
    # insert before closing of MY engines items (after food-delivery block ending at rental... actually after last fleet item)
    text = text.replace(
        "        priceFrom: '၉၅,၀၀၀',\n      },\n    ],\n  },\n  samples: {\n    title: 'နမူနာနှင့် အတူလည်ပတ်ပုံ'",
        "        priceFrom: '၉၅,၀၀၀',\n      }," + NEW_MY + "\n    ],\n  },\n  samples: {\n    title: 'နမူနာနှင့် အတူလည်ပတ်ပုံ'",
        1,
    )
    text = text.replace(
        "        priceFrom: '95,000',\n      },\n    ],\n  },\n  samples: {\n    title: 'Samples & how they run together'",
        "        priceFrom: '95,000',\n      }," + NEW_EN + "\n    ],\n  },\n  samples: {\n    title: 'Samples & how they run together'",
        1,
    )

# --- Pricing products helper ---
YES, NO = '✓', '—'

def pricing_block(pid, name, blurb, hot, prices, seats, vols, brs, feats, lims, lang='my'):
    b, p, e = prices
    if lang == 'my':
        tiers = f"""        {{
          id: 'basic',
          price: '{b}',
          seats: '{seats[0]}',
          volume: '{vols[0]}',
          branches: '{brs[0]}',
          features: [
            '{feats[0]}',
            '{feats[1]}',
            'Telegram + စာရင်းဇယား',
            'အစီရင်ခံ အဆင်သင့်',
          ],
          limits: [
            '{lims[0]}',
            'စနစ်ကြီး မဟုတ်',
          ],
          popular: true,
        }},        {{
          id: 'pro',
          price: '{p}',
          seats: '{seats[1]}',
          volume: '{vols[1]}',
          branches: '{brs[1]}',
          features: [
            'စတင်အစီအစဉ် ပါဝင်သမျှ',
            'စာရင်းသွင်း/ပြင်ဆင်မှု ပို',
          ],
          limits: [
            '{lims[0]}',
            'အလွန်ကြီး = ညှိ',
          ],
        }},        {{
          id: 'enterprise',
          price: '{e}',
          seats: '{seats[2]}',
          volume: '{vols[2]}',
          branches: '{brs[2]}',
          features: [
            'တိုးချဲ့ ပါဝင်သမျှ',
            'ဦးစားပေး',
            'ချိတ်ဆက်မှု ပို',
          ],
          limits: [
            'လမ်းကြောင်းအက်ပ် မပါ',
            'အလွန်ကြီး = ညှိ',
          ],
        }},        {{
          id: 'custom',
          price: '',
          seats: 'ညှိ',
          volume: 'ညှိ',
          branches: 'ညှိ',
          features: [
            'လုပ်ငန်းစဉ် ညှိ',
            'ညှိ',
          ],
          limits: [
            'ဈေး သီးခြား',
            'အလုပ်အကွင်း ရှင်းမှ စ',
          ],
        }}"""
        matrix = f"""        {{
          feature: 'စာရင်း / အလုပ်',
          basic: '{YES}',
          pro: '{YES}',
          enterprise: '{YES}',
          custom: '{YES}',
        }},        {{
          feature: 'အစီရင်ခံ',
          basic: '{YES}',
          pro: '{YES}',
          enterprise: '{YES}',
          custom: '{YES}',
        }},        {{
          feature: 'သတိပေး',
          basic: '{YES}',
          pro: '{YES}',
          enterprise: '{YES}',
          custom: '{YES}',
        }}"""
    else:
        tiers = f"""        {{
          id: 'basic',
          price: '{b}',
          seats: '{seats[0]}',
          volume: '{vols[0]}',
          branches: '{brs[0]}',
          features: [
            '{feats[0]}',
            '{feats[1]}',
            'Telegram + spreadsheet',
            'Report-ready',
          ],
          limits: [
            '{lims[0]}',
            'Not a heavy system',
          ],
          popular: true,
        }},        {{
          id: 'pro',
          price: '{p}',
          seats: '{seats[1]}',
          volume: '{vols[1]}',
          branches: '{brs[1]}',
          features: [
            'Everything in Start',
            'More list / update routines',
          ],
          limits: [
            '{lims[0]}',
            'Very large = Ask us',
          ],
        }},        {{
          id: 'enterprise',
          price: '{e}',
          seats: '{seats[2]}',
          volume: '{vols[2]}',
          branches: '{brs[2]}',
          features: [
            'Everything in Growing',
            'Priority help',
            'More tool links',
          ],
          limits: [
            'No custom map app',
            'Very large = Ask us',
          ],
        }},        {{
          id: 'custom',
          price: '',
          seats: 'Ask us',
          volume: 'Ask us',
          branches: 'Ask us',
          features: [
            'Custom workflow',
            'Tuned',
          ],
          limits: [
            'Quoted price',
            'Scope first',
          ],
        }}"""
        matrix = f"""        {{
          feature: 'List / job',
          basic: '{YES}',
          pro: '{YES}',
          enterprise: '{YES}',
          custom: '{YES}',
        }},        {{
          feature: 'Reports',
          basic: '{YES}',
          pro: '{YES}',
          enterprise: '{YES}',
          custom: '{YES}',
        }},        {{
          feature: 'Alerts',
          basic: '{YES}',
          pro: '{YES}',
          enterprise: '{YES}',
          custom: '{YES}',
        }}"""
    hot_line = ",\n      hot: true" if hot else ""
    return f"""      {{
      id: '{pid}',
      name: '{name}',
      blurb: '{blurb}'{hot_line},
      tiers: [
{tiers},
      ],
      matrix: [
{matrix},
      ],
    }}"""

my_specs = [
    ('pharmacy', 'ဆေးဆိုင်', 'စာရင်း · သက်တမ်း · ရောင်းအား', False,
     ('၇၀,၀၀၀', '၁၀၅,၀၀၀', '၁၅၀,၀၀၀'),
     ('၃ ဦး', '၈ ဦး', '၁၅ ဦး'), ('ပစ္စည်း ≈ ၈၀၀', '≈ ၂,၅၀၀', '≈ ၆,၀၀၀'), ('၁ ဆိုင်', '၁', '၁–၂'),
     ('စာရင်း + သက်တမ်းသတိပေး', 'နေ့စဉ် ရောင်းအား'), ('ဆေးဆိုင်စနစ်ကြီး မဟုတ်')),
    ('salon', 'အလှပြင် / ဆံပင်ညှပ်', 'ရက်ချိန်း · သတိပေး · ကြေး', False,
     ('၅၅,၀၀၀', '၈၅,၀၀၀', '၁၂၀,၀၀၀'),
     ('၃ ဦး', '၈ ဦး', '၁၅ ဦး'), ('ချိန်း ≈ ၄၀၀/လ', '≈ ၁,၂၀၀', '≈ ၃,၀၀၀'), ('၁ ဆိုင်', '၁', '၁–၂'),
     ('ရက်ချိန်း + သတိပေး', 'အဖွဲ့ဝင် ကြေး'), ('salon အက်ပ်ကြီး မဟုတ်')),
    ('laundry', 'အဝတ်လျှော်', 'လက်မှတ် · အခြေအနေ · ထုတ်ယူ', True,
     ('၅၀,၀၀၀', '၇၅,၀၀၀', '၁၁၀,၀၀၀'),
     ('၃ ဦး', '၈ ဦး', '၁၅ ဦး'), ('လက်မှတ် ≈ ၆၀၀/လ', '≈ ၂,၀၀၀', '≈ ၅,၀၀၀'), ('၁ ဆိုင်', '၁', '၁–၂'),
     ('လက်မှတ် + အခြေအနေ', 'ထုတ်ယူ သတိပေး'), ('အဝတ်လျှော်စနစ်ကြီး မဟုတ်')),
    ('water-delivery', 'သောက်ရေသန့်အိမ်အရောက်ပို့', 'အိမ်အရောက် · လမ်း/ဖယ်ရီ · ပို့ပြီး', False,
     ('၆၅,၀၀၀', '၉၅,၀၀၀', '၁၄၀,၀၀၀'),
     ('၄ ဦး', '၁၀ ဦး', '၂၀ ဦး'), ('ပုလင်း ≈ ၁,၀၀၀/လ', '≈ ၃,၀၀၀', '≈ ၈,၀၀၀'), ('၁ စက်ရုံ/ရုံး', '၁', '၁–၂'),
     ('မှာယူ + လမ်း/ဖယ်ရီ ခွဲ', 'ပုလင်း ပို့ပြီး မှတ်'), ('ပို့စနစ်ကြီး မဟုတ်')),
    ('chit-fund', 'အစုစုငွေ', 'ပေးပြီး · သတိပေး · လစဉ် ချုပ်', True,
     ('၄၅,၀၀၀', '၇၀,၀၀၀', '၁၀၀,၀၀၀'),
     ('၂ ဦး', '၅ ဦး', '၁၀ ဦး'), ('အဖွဲ့ဝင် ≈ ၈၀', '≈ ၂၅၀', '≈ ၆၀၀'), ('၁ အဖွဲ့', '၁–၂', '၃+'),
     ('ပေးပြီး/မပေး + သတိပေး', 'လစဉ် ချုပ်'), ('ငွေစုအက်ပ် မဟုတ်')),
]

en_specs = [
    ('pharmacy', 'Pharmacy', 'Stock · expiry · sales', False,
     ('70,000', '105,000', '150,000'),
     ('3 people', '8 people', '15 people'), ('≈ 800 SKUs', '≈ 2,500', '≈ 6,000'), ('1 shop', '1', '1–2'),
     ('Stock + expiry alerts', 'Daily sales'), ('Not a pharmacy system')),
    ('salon', 'Salon / barber', 'Book · remind · fees', False,
     ('55,000', '85,000', '120,000'),
     ('3 people', '8 people', '15 people'), ('≈ 400 bookings/mo', '≈ 1,200', '≈ 3,000'), ('1 shop', '1', '1–2'),
     ('Booking + reminders', 'Member fees'), ('Not a salon app')),
    ('laundry', 'Laundry', 'Ticket · status · pickup', True,
     ('50,000', '75,000', '110,000'),
     ('3 people', '8 people', '15 people'), ('≈ 600 tickets/mo', '≈ 2,000', '≈ 5,000'), ('1 shop', '1', '1–2'),
     ('Ticket + status', 'Pickup alerts'), ('Not a laundry system')),
    ('water-delivery', 'Purified water delivery', 'Bottles · road/ferry · delivered', False,
     ('65,000', '95,000', '140,000'),
     ('4 people', '10 people', '20 people'), ('≈ 1,000 bottles/mo', '≈ 3,000', '≈ 8,000'), ('1 plant/office', '1', '1–2'),
     ('Orders + road/ferry routes', 'Bottle delivered log'), ('Not a heavy delivery system')),
    ('chit-fund', 'Group savings (a-kyoe)', 'Paid · remind · monthly close', True,
     ('45,000', '70,000', '100,000'),
     ('2 people', '5 people', '10 people'), ('≈ 80 members', '≈ 250', '≈ 600'), ('1 group', '1–2', '3+'),
     ('Paid/unpaid + reminders', 'Monthly close'), ('Not a savings app')),
]

if "id: 'pharmacy'" not in text[text.find('products:'):text.find('howItWorks:')]:
    my_prods = [pricing_block(*s, lang='my') for s in my_specs]
    # find MY products end
    my_prod_start = text.index('    products: [', text.index('const my: Copy'))
    my_prod_end = text.index('    ],\n  },\n  howItWorks:', my_prod_start)
    block = text[my_prod_start:my_prod_end].rstrip() + ',\n' + ',\n'.join(my_prods) + '\n'
    text = text[:my_prod_start] + block + text[my_prod_end:]

en_prod_marker = text.find('    products: [', text.find('const en: Copy'))
en_how = text.find('    ],\n  },\n  howItWorks:', en_prod_marker)
en_block = text[en_prod_marker:en_how]
if "id: 'pharmacy'" not in en_block:
    en_prods = [
        pricing_block(s[0], s[1], s[2], s[3], s[4], s[5], s[6], s[7], s[8], s[9], 'en')
        for s in en_specs
    ]
    block = en_block.rstrip() + ',\n' + ',\n'.join(en_prods) + '\n'
    text = text[:en_prod_marker] + block + text[en_how:]

# niches
my_niches = [
    'ဆေးဆိုင် (၇၀,၀၀၀/လ)',
    'အလှပြင် / ဆံပင်ညှပ် (၅၅,၀၀၀/လ)',
    'အဝတ်လျှော် (၅၀,၀၀၀/လ) ★',
    'သောက်ရေသန့်အိမ်အရောက်ပို့ (၆၅,၀၀၀/လ)',
    'အစုစုငွေ (၄၅,၀၀၀/လ) ★',
]
en_niches = [
    'Pharmacy (70,000/mo)',
    'Salon / barber (55,000/mo)',
    'Laundry (50,000/mo) ★',
    'Purified water delivery (65,000/mo)',
    'Group savings (45,000/mo) ★',
]
for n in my_niches:
    if n not in text:
        text = text.replace(
            "      'အလုပ် ၂ ခု+ ပေါင်းစပ်ဈေး',",
            f"      '{n}',\n      'အလုပ် ၂ ခု+ ပေါင်းစပ်ဈေး',",
            1,
        )
for n in en_niches:
    if n not in text:
        text = text.replace(
            "      '2+ jobs combined quote',",
            f"      '{n}',\n      '2+ jobs combined quote',",
            1,
        )

path.write_text(text)
print('pharmacy count:', text.count("id: 'pharmacy'"))
print('informatics my:', text.count('ရယူ → မှတ်'))
print('collect en:', text.count('Collect → log'))
