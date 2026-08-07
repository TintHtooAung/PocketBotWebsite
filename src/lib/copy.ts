export type Lang = 'my' | 'en'

export type Copy = {
  nav: { id: string; label: string }[]
  common: {
    tryCta: string
    openMenu: string
    closeMenu: string
    prevPage: string
    nextPage: string
    pageHint: string
    pagesAria: string
    perMonth: string
    recommended: string
  }
  hero: {
    brandSub: string
    ribbons: string[]
    badge: string
    headline: string
    body1: string
    body2Before: string
    body2Mid: string
    body2After: string
    ctaTalk: string
    ctaHow: string
    wireLabel: string
    wire: { q: string; a: string }[]
    pledgeLabel: string
    pledge: string
  }
  why: {
    title: string
    hint: string
    intro: string
    ourWay: string
    oldWay: string
    panels: { bad: string; good: string }[]
  }
  engines: {
    title: string
    hint: string
    intro: string
    ask: string
    footer: string
    items: {
      id: string
      trade: string
      kind: string
      problem: string
      fix: string
    }[]
  }
  samples: {
    title: string
    hint: string
    tabSamples: string
    tabScenarios: string
    hintSamples: string
    hintScenarios: string
    chatBadge: string
    flowLabel: string
    ticksLabel: string
    tagAi: string
    tagStock: string
    tagReport: string
    askSample: string
    seeScenarios: string
    seeAiFeatures: string
    sceneLabel: string
    askScene: string
    customQuote: string
    items: {
      id: string
      trade: string
      kind: string
      blurb: string
      flow: string[]
      ticks: string[]
      chat: string
    }[]
    scenarios: {
      id: string
      title: string
      engines: string[]
      story: string[]
      result: string
    }[]
  }
  features: {
    title: string
    hint: string
    intro: string
    aiLabel: string
    ai: { title: string; body: string }[]
    chatLabel: string
    chatTitle: string
    chatBody: string
    chatEquip: string[]
    dashOrg: string
    dashOrgTitle: string
    dashOrgBody: string
    dashCust: string
    dashCustTitle: string
    dashCustBody: string
    quoteLabel: string
    quoteBody: string
    quoteCta: string
    samplesCta: string
    contactCta: string
  }
  operate: {
    title: string
    hint: string
    intro: string
    steps: { n: string; title: string; body: string }[]
    caps: { title: string; body: string }[]
    startLabel: string
    startBody: string
    freeConsult: string
    samplesCta: string
    formCta: string
  }
  pricing: {
    title: string
    hint: string
    intro: string
    youPay: string
    youGet: string
    startCta: string
    coreLabel: string
    aiLabel: string
    aiIntro: string
    aiStart: string
    quoteLabel: string
    quoteBody: string
    quoteCta: string
    core: {
      id: string
      name: string
      forWho: string
      price: string
      gets: string[]
      hot: boolean
    }[]
    ai: {
      id: string
      name: string
      forWho: string
      price: string
      gets: string[]
    }[]
  }
  howItWorks: {
    title: string
    steps: { n: string; title: string; body: string }[]
  }
  contact: {
    title: string
    hint: string
    asideHelp: string
    name: string
    phone: string
    niche: string
    nichePick: string
    message: string
    placeholder: string
    send: string
    thanks: string
    mailName: string
    mailContact: string
    mailNiche: string
    niches: string[]
    tagline: string
  }
}

const my: Copy = {
  nav: [
    { id: 'page-front', label: 'ရှေ့' },
    { id: 'page-why', label: 'ဘာကြောင့်' },
    { id: 'page-engines', label: 'အမျိုးအစား' },
    { id: 'page-samples', label: 'နမူနာ' },
    { id: 'page-features', label: 'အင်္ဂါရပ်' },
    { id: 'page-operate', label: 'ဘယ်လိုလုပ်' },
    { id: 'page-rates', label: 'ဈေး' },
    { id: 'page-order', label: 'ဆက်သွယ်' },
  ],
  common: {
    tryCta: 'စမ်းကြည့်ရန်',
    openMenu: 'မီနူးဖွင့်ရန်',
    closeMenu: 'ပိတ်ရန်',
    prevPage: 'ယခင်စာမျက်နှာ',
    nextPage: 'နောက်စာမျက်နှာ',
    pageHint: '↑↓ စာမျက်နှာ',
    pagesAria: 'စာမျက်နှာ ရွေးရန်',
    perMonth: '/လ',
    recommended: '★ အကြံပြု',
  },
  hero: {
    brandSub: 'ပေါ့ကက်အက်စ် · လုပ်ငန်းလည်ပတ်ရေး စနစ်',
    ribbons: [
      'စနစ်ကြီး မလို',
      'သင်တန်း မလို',
      'အလုပ်လမ်း မပြောင်းရ',
      'Telegram · Google Sheets',
    ],
    badge: 'အဓိက သတင်း',
    headline: 'လုပ်ငန်းလည်ပတ်မှုကို ချောမွေ့စေသော မောင်းစနစ်။',
    body1:
      'ကြေးကောက်ခံခြင်း၊ တန်းစီခြင်း၊ အသင်းဝင် စီမံခြင်း၊ အိမ်ငှားခ စောင့်ကြည့်ခြင်း၊ ရက်ချိန်းယူခြင်း အစရှိသည်တို့ကို သင့်အလုပ်လုပ်နည်းအတိုင်း ကူညီပေးပါသည်။ စနစ်ကြီးဝယ်ရန် မလို၊ ဝန်ထမ်းကို စနစ်သစ် သင်ပေးရန် မလို၊ အလုပ်လမ်းကို အတင်းပြောင်းရန် မလိုပါ။',
    body2Before: 'နေ့စဉ်သုံးနေသော',
    body2Mid: 'တွင် လည်ပတ်ပြီး အချက်အလက်ကို',
    body2After:
      'တွင် ပိုင်ဆိုင်ပါသည်။ လိုအပ်ပါက စိတ်ကြိုက် လုပ်ငန်းစဉ်နှင့် ဉာဏ်ရည်တု ပေါင်းစပ်မှုကိုလည်း တပ်ဆင်ပေးနိုင်ပါသည်။',
    ctaTalk: 'စတင်ဆွေးနွေးရန်',
    ctaHow: 'ဘယ်လို လုပ်ဆောင်သလဲ →',
    wireLabel: 'အကျဉ်းချုပ် · နှိပ်၍ ဖတ်ရန်',
    wire: [
      { q: 'ဘာလဲ', a: 'လုပ်ငန်းစဉ်အတိုင်း ပြင်ဆင်ပေးသော မောင်းစနစ်' },
      { q: 'ဘာကြောင့်', a: 'အလုပ်မပိတ်စေဘဲ လည်ပတ်မှုကို ကူညီသည်' },
      { q: 'ဘယ်လို', a: 'နားထောင် → ပြင်ဆင် → စမ်းသုံး → လည်ပတ်' },
    ],
    pledgeLabel: 'ကတိကဝတ်',
    pledge:
      'နည်းပညာသည် လုပ်ငန်းကို ကူညီရမည် — အလုပ်ပိတ်စေသော အရာ မဖြစ်စေရ။',
  },
  why: {
    title: 'ဘာကြောင့်လဲ',
    hint: 'အကွက်နှိပ်၍ နှိုင်းယှဉ်ရန်',
    intro:
      'စနစ်ကြီးများ၏ သင်တန်း၊ ကုန်ကျစရိတ်၊ စတင်အသုံးပြု ကြာချိန်နှင့် အက်ပ်တည်ဆောက်ရမှုတို့က လုပ်ငန်းကို ပိတ်စေတတ်ပါသည်။ PocketX သည် လိုအပ်သော မောင်းစနစ်ခွဲများဖြင့် လည်ပတ်မှုကို ချောမွေ့စေပါသည်။',
    ourWay: 'ကျွန်ုပ်တို့နည်း',
    oldWay: 'အရင်နည်း',
    panels: [
      {
        bad: 'လုပ်ငန်းစီမံစနစ်ကြီး ဝယ်ခြင်း — ဈေးကြီး၊ စတင်အသုံးပြု ကြာ၊ ဟိုစတင် ဝန်ထုပ်များ',
        good: 'မောင်းစနစ်ခွဲများသာ တပ်ဆင်သည် — ရက်အနည်းငယ်အတွင်း စတင်နိုင်၊ ထိန်းသိမ်းမှု နည်း',
      },
      {
        bad: 'အက်ပ် / စနစ် အသစ် တည်ဆောက်ခြင်း — အချိန်ကြာ၊ ကုန်ကျများ၊ လုပ်ငန်းလမ်း ပြောင်းရ',
        good: 'ရှိပြီးသား Telegram၊ Sheets၊ Calendar ပေါ်တွင် လည်ပတ်မှု တိုးတက်စေသည်',
      },
      {
        bad: 'စနစ်သစ် သင်ပေးရခြင်း — စကားဝှက် မေ့၊ မသုံးဖြစ်',
        good: 'နေ့စဉ်သုံး ကိရိယာများဖြစ်၍ သင်တန်းဝန်ထုပ် နည်းပါးသည်',
      },
      {
        bad: 'အလုပ်လမ်းကို စနစ်အလိုက် ပြောင်းခိုင်းခြင်း',
        good: 'သင့်လုပ်ငန်းစဉ်အတိုင်း ပြင်ဆင်ပေးသည် — လမ်းမဖျက်ပါ',
      },
      {
        bad: 'အင်္ဂါရပ်အားလုံး ဝယ်ရခြင်း — မလိုသေးသည်များပါ ပါလာ',
        good: 'လိုအပ်သော အင်္ဂါရပ်များသာ ရွေး · စိတ်ကြိုက် တောင်းခံနိုင်',
      },
      {
        bad: 'နည်းပညာကြောင့် အလုပ်ပိတ်၊ ရှုပ်ထွေး၊ စိုးရိမ်ရ',
        good: 'ဉာဏ်ရည်နှင့် အလိုအလျောက် စနစ်က ကူညီမြှင့်တင်ပေးသည် — ပိတ်ဆို့မှု မဖြစ်စေပါ',
      },
    ],
  },
  engines: {
    title: 'လုပ်ငန်းအမျိုးအစား',
    hint: 'ဒေါင်လိုက်များ · ဂေဟစနစ် အခန်းကဏ္ဍ · အခြားအမျိုးအစားလည်း ဖွင့်လှစ်',
    intro:
      'လုပ်ငန်းတစ်ခုချင်းစီသာ မဟုတ်ပါ — ယာဉ်မောင်း၊ ဖောက်သည်၊ ဆိုင်၊ ပို့ဆောင်ရေးတို့ကို တစ်ခုတည်းသော ဂေဟစနစ်အဖြစ် ချိတ်ဆက်နိုင်ပါသည်။',
    ask: 'ဒီအမျိုးအစား မေးရန်',
    footer:
      'မပါသေးသော လုပ်ငန်းလား။ စိတ်ကြိုက် လုပ်ငန်းစဉ်ဖြင့် တပ်ဆင်ပေးနိုင်ပါသည် — “နမူနာ” ကဏ္ဍတွင် အထွက်အင်္ဂါရပ်များ ကြည့်ရှုနိုင်ပါသည်။',
    items: [
      {
        id: 'restaurant',
        trade: 'စားသောက်ဆိုင်',
        kind: 'ဆိုင်လည်ပတ်ရေး',
        problem: 'တန်းရှည် · မှာယူမှု ရောထွေး · ပစ္စည်းကုန်မှ သိ',
        fix: 'တန်းစီ · မှာယူမှု လွှဲပြောင်း · ပစ္စည်းကုန် သတိပေး — အလုပ်လမ်း မပြောင်းဘဲ ချောမွေ့',
      },
      {
        id: 'logistics',
        trade: 'ထောက်ပံ့ပို့ဆောင်ရေး',
        kind: 'ကုန်စည်ပို့ဆောင်',
        problem: 'ပစ္စည်းလမ်းကြောင်း · ပို့ဆောင်အခြေအနေ · ဖောက်သည် အကြောင်းကြား',
        fix: 'မှာယူမှုမှ ပို့ဆောင်ပြီးသည်အထိ တစ်ဆက်တည်း မှတ်တမ်းနှင့် သတိပေး',
      },
      {
        id: 'driver',
        trade: 'ယာဉ်မောင်း / ပို့ဆောင်သူ',
        kind: 'ပို့ဆောင်အဖွဲ့',
        problem: 'လမ်းညွှန် · တာဝန်ခွဲ · အခြေအနေ ပြန်ကြား မနိုင်',
        fix: 'တာဝန်ခွဲဝေ · လမ်းကြောင်း · ပြီးမြောက်မှု — Telegram မှ စီမံ',
      },
      {
        id: 'customer',
        trade: 'ဖောက်သည် လမ်းကြောင်း',
        kind: 'ဖောက်သည်',
        problem: 'မေးခွန်းများ ရောထွေး · အော်ဒါ အခြေအနေ မသိ',
        fix: 'စကားပြောလမ်းကြောင်း တစ်ခု · အခြေအနေ ကြည့်ရှု · သတိပေးချက်',
      },
      {
        id: 'shop-eco',
        trade: 'ဆိုင် ဂေဟစနစ်',
        kind: 'ဆိုင်တစ်ခုလုံး',
        problem: 'ရှေ့တန်း · ဂိုဒေါင် · ပို့ဆောင် · ငွေ — သီးခြား သီးခြား',
        fix: 'မောင်းစနစ်များ ချိတ်ဆက်ပြီး ဆိုင်တစ်ခုလုံးကို တစ်ခုတည်းအဖြစ် လည်ပတ်',
      },
      {
        id: 'billing',
        trade: 'ကြေးကောက်ခံမှု',
        kind: 'ငွေကောက်ခံရေး',
        problem: 'ဘယ်သူ ပေးပြီး/မပေး · လိုက်တောင်း မနိုင်',
        fix: 'ရက်ချိန်း · ပြေစာ · အလိုအလျောက် သတိပေး — အလုပ်မရပ်',
      },
      {
        id: 'tuition',
        trade: 'ကျူရှင် / ကျောင်းရုံး',
        kind: 'ပညာရေးရုံး',
        problem: 'ကျောင်းသားစာရင်း · အတန်း · မိဘဖုန်းခေါ် မနိုင်',
        fix: 'စာရင်း၊ တက်ရောက်မှု၊ ရုံးအလုပ် — Telegram မှာ လည်ပတ်',
      },
      {
        id: 'clinic',
        trade: 'ဆေးခန်း / ရက်ချိန်း',
        kind: 'ရက်ချိန်း',
        problem: 'ရက်ချိန်း ထပ် · Facebook စကားရော',
        fix: 'အချိန်ကွက် ချိန်း · သတိပေး · ရှေ့တန်း တန်းစီ',
      },
    ],
  },
  samples: {
    title: 'နမူနာနှင့် အတူလည်ပတ်ပုံ',
    hint: 'အင်္ဂါရပ် အမှတ်ခြစ် · အသုံးပြုမှု မြင်ကွင်းများ',
    tabSamples: 'လုပ်ငန်းနမူနာ',
    tabScenarios: 'အတူလည်ပတ်ပုံ',
    hintSamples: 'လုပ်ငန်းအလိုက် တပ်ဆင်နိုင်သော အင်္ဂါရပ်များ',
    hintScenarios: 'မောင်းစနစ်များ အချင်းချင်း ပေါင်းစပ် လည်ပတ်ပုံ',
    chatBadge: 'စကားပြော တပ်ဆင်နိုင်',
    flowLabel: 'လည်ပတ်မှု အဆင့်များ',
    ticksLabel: 'တပ်ဆင်နိုင်သော အင်္ဂါရပ်များ',
    tagAi: 'ဉာဏ်ရည်',
    tagStock: 'စတော့',
    tagReport: 'အစီရင်ခံ',
    askSample: 'ဒီနမူနာ မေးရန်',
    seeScenarios: 'အတူလည်ပတ်ပုံ ကြည့်ရန်',
    seeAiFeatures: 'ဉာဏ်ရည် အင်္ဂါရပ်များ',
    sceneLabel: 'အသုံးပြုမှု မြင်ကွင်း',
    askScene: 'ဒီမြင်ကွင်း တိုင်ပင်ရန်',
    customQuote: 'စိတ်ကြိုက် တောင်းခံ',
    items: [
      {
        id: 'restaurant',
        trade: 'စားသောက်ဆိုင်',
        kind: 'ဆိုင်လည်ပတ်ရေး',
        blurb: 'မှာယူမှုမှ ထုတ်ပေးသည်အထိ — တန်းမရှည်၊ စတော့မပျောက်။',
        flow: [
          'ဖောက်သည် Telegram မှ မှာယူ',
          'မီးဖို / ရှေ့တန်းသို့ အလိုအလျောက် လွှဲ',
          'စတော့ စစ် · ပစ္စည်းကုန် သတိပေး',
          'ရောင်းအား · ငွေမှတ် Sheets တွင် ပိုင်ဆိုင်',
        ],
        ticks: [
          'တန်းစီ / မှာယူမှု အခြေအနေ',
          'စတော့ ထိန်းချုပ် · ကုန် သတိပေး',
          'နေ့စဉ် ရောင်းအား အစီရင်ခံ',
          'အချိန်ဇယား သတိပေး',
          'စကားပြောဖြင့် မှာယူ / မေးမြန်း',
          'ငွေဝင် မှတ်တမ်း',
        ],
        chat: 'မီနူးကြည့်၊ မှာယူ၊ အခြေအနေမေး — စကားပြောတစ်ခုတည်းမှ',
      },
      {
        id: 'logistics',
        trade: 'ထောက်ပံ့ပို့ဆောင်ရေး',
        kind: 'ကုန်စည်ပို့ဆောင်',
        blurb: 'လမ်းကြောင်းညှိ၊ ခန့်မှန်း၊ ပို့ဆောင်ပြီးသည်အထိ တစ်ဆက်တည်း။',
        flow: [
          'အော်ဒါ လက်ခံ · ခန့်မှန်းကြာချိန် ထုတ်',
          'လမ်းကြောင်း ညှိနှိုင်း · ယာဉ်မောင်း တာဝန်ခွဲ',
          'လမ်းတွင် အခြေအနေ ပြန်ကြား',
          'ရောက်ပြီး သတိပေး · အစီရင်ခံ ပိတ်',
        ],
        ticks: [
          'လမ်းကြောင်း ညှိနှိုင်း',
          'ပို့ဆောင်ကြာချိန် / ကုန်ကျ ခန့်မှန်း',
          'ပစ္စည်းလမ်းကြောင်း မှတ်တမ်း',
          'ယာဉ်မောင်း တာဝန်စာရင်း',
          'ဖောက်သည် အကြောင်းကြား',
          'နေ့စဉ် ပို့ဆောင် အစီရင်ခံ',
        ],
        chat: 'အော်ဒါအခြေအနေ၊ လမ်းမေး၊ ရောက်ချိန်ခန့်မှန်း — စကားပြောမှ',
      },
      {
        id: 'driver',
        trade: 'ယာဉ်မောင်း / ပို့ဆောင်သူ',
        kind: 'ပို့ဆောင်အဖွဲ့',
        blurb: 'တာဝန်၊ လမ်းညွှန်၊ ပြီးမြောက်မှု — အဖွဲ့နှင့် ရုံး တစ်ဆက်တည်း။',
        flow: [
          'နေ့စဉ် တာဝန်စာရင်း လက်ခံ',
          'လမ်းကြောင်း / လိပ်စာ ကြည့်ရှု',
          'ရောက်ရှိ · လက်ခံပြီး မှတ်',
          'ပိတ်နေသော အချက် ရုံးသို့ ပြန်ကြား',
        ],
        ticks: [
          'တာဝန်ခွဲဝေ စာရင်း',
          'လမ်းညွှန် / လိပ်စာ',
          'ပြီးမြောက်မှု အမှတ်ခြစ်',
          'ပြဿနာ ပြန်ကြား',
          'နေ့စဉ် စွမ်းဆောင်ရည် အကျဉ်း',
          'စကားပြောဖြင့် တာဝန် လက်ခံ',
        ],
        chat: 'တာဝန်ကြည့်၊ ပြီးမြောက်မှတ်၊ အကူအညီတောင်း — Telegram မှ',
      },
      {
        id: 'shop-eco',
        trade: 'ဆိုင် ဂေဟစနစ်',
        kind: 'ဆိုင်တစ်ခုလုံး',
        blurb: 'ရှေ့တန်း၊ ဂိုဒေါင်၊ ပို့ဆောင်၊ ငွေ၊ ဖောက်သည် — တစ်ခုတည်း။',
        flow: [
          'ဖောက်သည် မှာယူ / ရက်ချိန်း',
          'စတော့ စစ် · ရှေ့တန်း လုပ်ဆောင်',
          'ပို့ဆောင် သို့မဟုတ် ဆိုင်တွင် ထုတ်',
          'လယ်ဂျာ မှတ် · ထိန်းချုပ်ရေးမှ ကြည့်',
        ],
        ticks: [
          'ထိန်းချုပ်ရေး မျက်နှာပြင်',
          'ဖောက်သည် သုံးစွဲသူ မျက်နှာပြင်',
          'စတော့ · ရောင်းအား · ပို့ဆောင်',
          'အလိုအလျောက် လယ်ဂျာ / ငွေမှတ်',
          'POS / ရှိပြီးသား စနစ် ချိတ်ဆက်',
          'အစီရင်ခံ · သတိပေး · စကားပြော',
        ],
        chat: 'ဌာနတိုင်းကို စကားပြောလမ်းကြောင်းဖြင့် ချိတ်ဆက်နိုင်',
      },
      {
        id: 'billing',
        trade: 'ကြေးကောက်ခံမှု',
        kind: 'ငွေကောက်ခံရေး',
        blurb: 'လယ်ဂျာ၊ သတိပေး၊ ကျန်စာရင်း — လိုက်မတောင်းရအောင်။',
        flow: [
          'ဖောက်သည် / အသင်းဝင် စာရင်း',
          'ရက်ချိန်းအလိုက် ကြေးထုတ် · လယ်ဂျာ မှတ်',
          'အချိန်ဇယား သတိပေး အလိုအလျောက်',
          'ပေးပြီး / ကျန် စာရင်းချုပ်',
        ],
        ticks: [
          'အလိုအလျောက် လယ်ဂျာ',
          'ပေးပြီး / မပေး စာရင်း',
          'အချိန်ဇယား သတိပေး',
          'ပြေစာ မှတ်တမ်း',
          'နောက်ကျသူ စာရင်း',
          'လစဉ် ကောက်ခံ အစီရင်ခံ',
        ],
        chat: 'ကျန်ငွေမေး၊ ပြေစာတောင်း၊ ပေးပြီးအတည်ပြု — စကားပြောမှ',
      },
      {
        id: 'clinic',
        trade: 'ဆေးခန်း / ရက်ချိန်း',
        kind: 'ရက်ချိန်း',
        blurb: 'အချိန်ကွက်၊ သတိပေး၊ တန်းစီ — ထပ်မနေ၊ မေ့မနေ။',
        flow: [
          'အချိန်ကွက် ရွေး · ချိန်း',
          'Calendar နှင့် ချိတ်ဆက်',
          'ရက်မတိုင်မီ သတိပေး',
          'တက်ရောက် / ရွှေ့ဆိုင်း မှတ်',
        ],
        ticks: [
          'အချိန်ကွက် ဇယား',
          'Calendar ချိတ်ဆက်',
          'အချိန်ဇယား သတိပေး',
          'တန်းစီ / ခေါ်ယူ',
          'တက်ရောက်မှု မှတ်တမ်း',
          'စကားပြောဖြင့် ချိန်း / ရွှေ့',
        ],
        chat: 'ချိန်းယူ၊ ရွှေ့ဆိုင်း၊ အချိန်မေး — Telegram မှ',
      },
      {
        id: 'tuition',
        trade: 'ကျူရှင် / ကျောင်းရုံး',
        kind: 'ပညာရေးရုံး',
        blurb: 'စာရင်း၊ တက်ရောက်မှု၊ မိဘအကြောင်းကြား၊ ကြေး — ရုံးချောမွေ့။',
        flow: [
          'ကျောင်းသား / အတန်း စာရင်း',
          'တက်ရောက်မှု အမှတ်ခြစ်',
          'မိဘသို့ သတိပေး / အကြောင်းကြား',
          'ကြေး · ရုံး အစီရင်ခံ',
        ],
        ticks: [
          'ကျောင်းသား / အတန်း စာရင်း',
          'တက်ရောက်မှု အမှတ်ခြစ်',
          'မိဘ သတိပေးချက်',
          'ကြေးကောက်ခံ / လယ်ဂျာ',
          'ရုံး အစီရင်ခံ',
          'စကားပြောဖြင့် မေး / အကြောင်းကြား',
        ],
        chat: 'မိဘနှင့် ရုံး — စကားပြောလမ်းကြောင်းတစ်ခုမှ',
      },
      {
        id: 'customer',
        trade: 'ဖောက်သည် လမ်းကြောင်း',
        kind: 'ဖောက်သည်',
        blurb: 'မေး၊ မှာ၊ အခြေအနေကြည့် — လမ်းကြောင်းတစ်ခုတည်း။',
        flow: [
          'ဖောက်သည် Telegram မှ ဆက်သွယ်',
          'မေးလေ့ရှိ မေးခွန်း အလိုအလျောက် ဖြေ',
          'အော်ဒါ / ရက်ချိန်း အခြေအနေ ကြည့်',
          'လိုအပ်ပါက ဝန်ထမ်းသို့ လွှဲ',
        ],
        ticks: [
          'စကားပြောလမ်းကြောင်း တစ်ခု',
          'အလိုအလျောက် အဖြေ',
          'အော်ဒါ / ရက်ချိန်း မြင်ကွင်း',
          'သတိပေးချက်',
          'ဝန်ထမ်း လွှဲပြောင်း မှတ်',
          'ဖောက်သည် သုံးစွဲသူ မျက်နှာပြင်',
        ],
        chat: 'မည်သည့် မောင်းစနစ်နှင့်မဆို စကားပြောဖြင့် ချိတ်ဆက်နိုင်',
      },
    ],
    scenarios: [
      {
        id: 'deliver-chain',
        title: 'ဆိုင်မှ ပို့ဆောင်အထိ',
        engines: ['ဆိုင်', 'စတော့', 'ယာဉ်မောင်း', 'ဖောက်သည်'],
        story: [
          'ဖောက်သည် စကားပြောမှ မှာယူသည်။',
          'စတော့ စစ်ပြီး မီးဖို / ဂိုဒေါင်သို့ လွှဲသည်။',
          'လမ်းကြောင်း ညှိ · ယာဉ်မောင်း တာဝန်ရသည်။',
          'ရောက်ချိန် ခန့်မှန်း · ဖောက်သည် သတိပေး ရသည်။',
          'ငွေမှတ် · နေ့စဉ် အစီရင်ခံ ပိတ်သည်။',
        ],
        result:
          'အက်ပ်အသစ် မဆောက်ဘဲ — မောင်းစနစ်ခွဲများ အတူလည်ပတ်ပြီး ပို့ဆောင်ကွင်းဆက် ပြည့်စုံသည်။',
      },
      {
        id: 'ledger-stock',
        title: 'ငွေနှင့် စတော့ တစ်ဆက်တည်း',
        engines: ['စတော့', 'လယ်ဂျာ', 'သတိပေး', 'ထိန်းချုပ်ရေး'],
        story: [
          'ရောင်းချမှုတိုင်း စတော့ လျော့သည်။',
          'ငွေဝင်ငွေထွက် လယ်ဂျာတွင် အလိုအလျောက် မှတ်သည်။',
          'ပစ္စည်းကုန်နီး · အချိန်ဇယား သတိပေး ပို့သည်။',
          'ပိုင်ရှင် ထိန်းချုပ်ရေးမှ ရောင်းအား / ကျန်ငွေ ကြည့်သည်။',
        ],
        result:
          'စာရင်းကို လက်ဖြင့် မလိုက်ဘဲ — စတော့နှင့် ငွေ တစ်ချိန်တည်း ရှင်းလင်းသည်။',
      },
      {
        id: 'fleet-day',
        title: 'ပို့ဆောင်အဖွဲ့ တစ်နေ့တာ',
        engines: ['လမ်းကြောင်း', 'ယာဉ်မောင်း', 'ခန့်မှန်း', 'အစီရင်ခံ'],
        story: [
          'မနက်ခင်း တာဝန်စာရင်း ထုတ်သည်။',
          'လမ်းကြောင်း ညှိနှိုင်း · ကြာချိန် ခန့်မှန်းသည်။',
          'ယာဉ်မောင်းများ စကားပြောမှ လက်ခံ · ပြီးမြောက် အမှတ်ခြစ်သည်။',
          'ညနေ အစီရင်ခံ · မပြီးသေးသော တာဝန် ကျန်စာရင်း ထွက်သည်။',
        ],
        result:
          'ရုံးနှင့် လမ်းပေါ် အဖွဲ့ — စကားပြောနှင့် မှတ်တမ်းတစ်ခုတည်းတွင် ပေါင်းစည်းသည်။',
      },
      {
        id: 'clinic-day',
        title: 'ရက်ချိန်းမှ ငွေအထိ',
        engines: ['ရက်ချိန်း', 'သတိပေး', 'တန်းစီ', 'လယ်ဂျာ'],
        story: [
          'ဖောက်သည် အချိန်ကွက် ချိန်းသည်။',
          'ရက်မတိုင်မီ သတိပေး ရသည်။',
          'ရောက်ရှိ တန်းစီ · ခေါ်ယူသည်။',
          'ဝန်ဆောင်မှုပြီး · ငွေ / ပြေစာ လယ်ဂျာ မှတ်သည်။',
        ],
        result:
          'ရက်ချိန်းထပ်၊ မေ့၊ ငွေပျောက် — ပိတ်နေသော အချက်များ တစ်ဆက်တည်း ပြေလည်သည်။',
      },
    ],
  },
  features: {
    title: 'ဉာဏ်ရည်နှင့် အင်္ဂါရပ်များ',
    hint: 'အလိုအလျောက် · စကားပြော · စိတ်ကြိုက် တောင်းခံ',
    intro:
      'အက်ပ် သို့မဟုတ် စနစ်ကြီး တည်ဆောက်ရခြင်းထက် — လိုအပ်သော မောင်းစနစ်ခွဲများကိုသာ တပ်ဆင်ပြီး လည်ပတ်မှုကို ဉာဏ်ရည်ဖြင့် ချောမွေ့စေပါသည်။ ဟိုစတင် / စနစ်ထိန်းသိမ်းမှု ဝန်ထုပ် နည်းပါးပါသည်။',
    aiLabel: 'ဉာဏ်ရည်တု / အလိုအလျောက် စွမ်းရည်များ',
    ai: [
      {
        title: 'လမ်းကြောင်း ညှိနှိုင်း',
        body: 'ပို့ဆောင်လမ်းများ ချုံ့ · လောင်စာ / အချိန် သက်သာ',
      },
      {
        title: 'ခန့်မှန်းချက်',
        body: 'ပို့ဆောင်ကြာချိန် · ကုန်ကျ · စွမ်းရည် ခန့်မှန်း',
      },
      {
        title: 'စာရင်း / လယ်ဂျာ',
        body: 'ငွေဝင်ငွေထွက် · လယ်ဂျာ အလိုအလျောက် မှတ်',
      },
      {
        title: 'စတော့ ထိန်းချုပ်',
        body: 'ပစ္စည်းကုန် · ပြန်မှာ · ဂိုဒေါင် စာရင်း',
      },
      {
        title: 'အချိန်ဇယား သတိပေး',
        body: 'ရက်ချိန်း · ငွေ · တာဝန် — အချိန်မှန် ပို့',
      },
      {
        title: 'အစီရင်ခံ / စာရင်းချုပ်',
        body: 'နေ့စဉ် · လစဉ် အစီရင်ခံ Telegram သို့မဟုတ် Sheets',
      },
    ],
    chatLabel: 'စကားပြောဖြင့် တပ်ဆင်နိုင်',
    chatTitle: 'မည်သည့် အင်္ဂါရပ်မဆို · Telegram',
    chatBody:
      'မှာယူမှုမှ အစီရင်ခံအထိ — စကားပြောလမ်းကြောင်းတစ်ခုမှ မေး၊ မှတ်၊ စီမံနိုင်ပါသည်။',
    chatEquip: [
      'မှာယူမှု / တန်းစီ',
      'ပို့ဆောင် အခြေအနေ',
      'ငွေ / ပြေစာ',
      'စတော့ မေးမြန်း',
      'ရက်ချိန်း',
      'အစီရင်ခံ တောင်း',
    ],
    dashOrg: 'အဖွဲ့အစည်း',
    dashOrgTitle: 'ထိန်းချုပ်ရေး မျက်နှာပြင်',
    dashOrgBody: 'ဆိုင်ခွဲ · စတော့ · ငွေ · အစီရင်ခံ',
    dashCust: 'ဖောက်သည်',
    dashCustTitle: 'သုံးစွဲသူ မျက်နှာပြင်',
    dashCustBody: 'အခြေအနေ · ရက်ချိန်း · သတိပေး',
    quoteLabel: 'စိတ်ကြိုက် ပရောဂျက် · ဈေးနှုန်း တောင်းခံ',
    quoteBody:
      'လုပ်ငန်းအမျိုးအစားအလိုက် အင်္ဂါရပ်များ ရွေးချယ်၊ ပရောဂျက်အကျယ်အဝန်း သတ်မှတ်ပြီး သီးခြား ဈေးနှုန်း တောင်းခံပေးပါသည်။ စနစ်ကြီး ဝယ်စရာ မလိုပါ။',
    quoteCta: 'တောင်းခံရန်',
    samplesCta: 'နမူနာ / အတူလည်ပတ်',
    contactCta: 'ဆက်သွယ်',
  },
  operate: {
    title: 'ဘယ်လို လုပ်ဆောင်သလဲ',
    hint: 'မောင်းစနစ်ခွဲ · ဉာဏ်ရည် · တောင်းခံဈေး',
    intro:
      'စနစ်ကြီး အစားထိုးရန် မဟုတ်ပါ — လိုအပ်သော မောင်းစနစ်ခွဲများဖြင့် လည်ပတ်မှုကို ဉာဏ်ရည်နှင့် အလိုအလျောက် ချောမွေ့စေပါသည်။ ဟိုစတင်နှင့် ထိန်းသိမ်းမှု ဝန်ထုပ် နည်းပါးပါသည်။',
    steps: [
      {
        n: '၁',
        title: 'နားထောင်သည်',
        body: 'ပိတ်နေသော အဆင့်၊ လိုအပ်သော အင်္ဂါရပ်၊ ပရောဂျက်အကျယ်အဝန်းကို နားထောင်ပါသည်။',
      },
      {
        n: '၂',
        title: 'မောင်းစနစ်ခွဲ တပ်ဆင်သည်',
        body: 'လိုအပ်သည်များကိုသာ ရွေး · ဂေဟစနစ်အဖြစ် ချိတ်ဆက် · ဉာဏ်ရည် ထည့်သွင်း။',
      },
      {
        n: '၃',
        title: 'စမ်းသုံး စစ်ဆေးသည်',
        body: 'အဖွဲ့နှင့်အတူ စမ်းသုံးပြီး လိုအပ်သည့်နေရာကို ညှိနှိုင်း ပြင်ဆင်ပါသည်။',
      },
      {
        n: '၄',
        title: 'လည်ပတ် သင်ကြားသည်',
        body: 'နေ့စဉ်သုံး ကိရိယာများပေါ်တွင် မောင်းနိုင်ရန် လက်တွေ့ လေ့ကျင့်ပေးပါသည်။',
      },
    ],
    caps: [
      {
        title: 'မောင်းစနစ်ခွဲများ — အက်ပ်မဆောက်ဘဲ',
        body: 'အက်ပ် သို့မဟုတ် စနစ်ကြီး တည်ဆောက်ရခြင်းသည် အချိန်နှင့် ကုန်ကျစရိတ်များသည်။ PocketX သည် လိုအပ်သော မောင်းစနစ်ခွဲများကိုသာ တပ်ဆင်ပြီး လည်ပတ်မှုကို တိုးတက်စေပါသည်။',
      },
      {
        title: 'ဉာဏ်ရည်ဖြင့် လည်ပတ်မှု ညှိနှိုင်း',
        body: 'လမ်းကြောင်းညှိခြင်း၊ ခန့်မှန်းချက်၊ လယ်ဂျာ၊ စတော့၊ သတိပေးချက်တို့ကို ဉာဏ်ရည်တု / အလိုအလျောက် စနစ်နှင့် ပေါင်းစပ်ပေးနိုင်ပါသည်။',
      },
      {
        title: 'ရှိပြီးသား စနစ်နှင့် ချိတ်ဆက်',
        body: 'POS သို့မဟုတ် အခြားစနစ်ကို စွန့်ပစ်ရန် မလိုအပ်ပါ။ API ဖြင့် ချိတ်ဆက်ပြီး ဒေတာစီးဆင်းမှုကို ဆက်လက် ထိန်းသိမ်းနိုင်ပါသည်။',
      },
      {
        title: 'ဒစ်ဂျစ်တယ် စာတတ်မှု အစီအစဉ်',
        body: 'လုပ်ငန်းရှင်နှင့် အဖွဲ့ကိုယ်တိုင် မောင်းနိုင်ရန် Telegram၊ Google Sheets၊ Calendar တို့ကို လက်တွေ့ သင်ကြားပေးပါသည်။',
      },
      {
        title: 'စိတ်ကြိုက် ပရောဂျက် · ဈေးနှုန်း တောင်းခံ',
        body: 'လုပ်ငန်းအမျိုးအစား၊ အင်္ဂါရပ်စာရင်း၊ ပရောဂျက်အကျယ်အဝန်းအလိုက် သီးခြားအစီအစဉ် ရေးဆွဲပြီး ဈေးနှုန်း တောင်းခံပေးပါသည်။ ဦးစွာ အခမဲ့ တိုင်ပင်ဆွေးနွေးနိုင်ပါသည်။',
      },
    ],
    startLabel: 'စတင်ရန်',
    startBody:
      'အင်္ဂါရပ်စာရင်း၊ ပရောဂျက်အကျယ်အဝန်း၊ ဉာဏ်ရည် ပေါင်းစပ်မှု သို့မဟုတ် ဆိုင်ခွဲများအတွက် — ဦးစွာ အခမဲ့ တိုင်ပင်ပြီး လိုအပ်ပါက ဈေးနှုန်း တောင်းခံပေးပါသည်။',
    freeConsult: 'အခမဲ့ တိုင်ပင်ရန်',
    samplesCta: 'နမူနာ / အတူလည်ပတ်',
    formCta: 'ဆက်သွယ်ရေး ပုံစံဖြည့်ရန်',
  },
  pricing: {
    title: 'ဈေးနှုန်း',
    hint: 'ပေးသည့်ငွေ · ရရှိမည့်အရာ',
    intro:
      'အစီအစဉ်တစ်ခု ရွေးပါ။ လစဉ် ပေးရမည့်ငွေနှင့် ရရှိမည့်အရာကို အောက်တွင် ရှင်းလင်းစွာ ဖော်ပြထားပါသည်။',
    youPay: 'ပေးရမည်',
    youGet: 'ရရှိမည်',
    startCta: 'ဒီအစီအစဉ် ရွေးရန်',
    coreLabel: '၁ · လုပ်ငန်းမောင်းစနစ် အစီအစဉ်',
    aiLabel: '၂ · ဉာဏ်ရည် (လိုမှ ထပ်တပ်)',
    aiIntro:
      'အထက်ပါ အစီအစဉ်နှင့် သီးခြားဖြစ်သည်။ ပုံမှန်အစီအစဉ်ဖြင့် အရင်စပြီး၊ ဉာဏ်ရည်လိုမှ နောက်မှ ထပ်တပ်နိုင်ပါသည်။',
    aiStart: 'ဉာဏ်ရည် ထပ်တပ်ရန်',
    quoteLabel: 'စိတ်ကြိုက် လိုအပ်ပါက',
    quoteBody:
      'ဆိုင်ခွဲများ၊ POS ချိတ်ဆက်၊ သို့မဟုတ် အထူးဉာဏ်ရည် လိုပါက ဈေးနှုန်း တောင်းခံပေးပါသည်။',
    quoteCta: 'ဈေးနှုန်း မေးရန်',
    core: [
      {
        id: 'basic',
        name: 'အခြေခံ',
        forWho: 'အလုပ်ပိတ်နေသော အချက် တစ်ခုသာ ဖြေရှင်းလိုသူ',
        price: '$10',
        gets: [
          'မောင်းစနစ် ၁ ခု (ဥပမာ တန်းစီ သို့မဟုတ် ကြေးကောက်)',
          'မှတ်တမ်း ၅၀ အထိ',
          '၇ ရက် အခမဲ့ စမ်းသုံး',
        ],
        hot: false,
      },
      {
        id: 'pro',
        name: 'အဆင့်မြင့်',
        forWho: 'အလုပ်များစွာ တစ်ပြိုင်နက် လည်ပတ်လိုသူ',
        price: '$45',
        gets: [
          'မောင်းစနစ် ၃ ခု အထိ',
          'မှတ်တမ်း ၅၀၀ အထိ',
          'စိတ်ကြိုက် အချက်အလက်ကွက်',
          'စတင်အသုံးပြု ညှိနှိုင်း ကူညီမှု',
        ],
        hot: true,
      },
      {
        id: 'enterprise',
        name: 'အဖွဲ့အစည်း',
        forWho: 'ဆိုင်ခွဲ / ဌာနများ စီမံလိုသူ',
        price: '$100',
        gets: [
          'မောင်းစနစ် ကန့်သတ်မရှိ',
          'ပိုင်ရှင် ထိန်းချုပ်ရေး မျက်နှာပြင်',
          'ဖောက်သည် သုံးစွဲသူ မျက်နှာပြင်',
          'ရှိပြီးသား POS နှင့် ချိတ်ဆက်ခွင့်',
          'ဦးစားပေး အကူအညီ',
        ],
        hot: false,
      },
    ],
    ai: [
      {
        id: 'ai-addon',
        name: 'ဉာဏ်ရည် ပေါ့ပါး',
        forWho: 'ပုံမှန်အစီအစဉ်ပေါ်တွင် စကားပြော / သတိပေး ထပ်လိုသူ',
        price: '$25',
        gets: [
          'Telegram မှ မေး · လုပ်ဆောင်နိုင်',
          'အချိန်မှန် သတိပေးချက်',
          'နေ့စဉ် အစီရင်ခံ အကျဉ်း',
        ],
      },
      {
        id: 'ai-native',
        name: 'ဉာဏ်ရည် အပြည့်',
        forWho: 'လမ်းညှိ၊ ငွေမှတ်၊ စတော့ အလိုအလျောက် လိုသူ',
        price: '$60',
        gets: [
          'လမ်းကြောင်း ညှိနှိုင်း / ကြာချိန် ခန့်မှန်း',
          'ငွေစာရင်း အလိုအလျောက် မှတ်',
          'စတော့ / ပစ္စည်း ထိန်းချုပ်',
          'အစီရင်ခံ + စကားပြော လမ်းကြောင်း',
        ],
      },
    ],
  },
  howItWorks: {
    title: 'အကျဉ်းချုပ်',
    steps: [
      { n: '၁', title: 'တိုင်ပင်', body: 'လိုအပ်ချက် နားထောင်သည်။' },
      { n: '၂', title: 'ချိတ်ဆက်', body: 'ဂေဟစနစ် တပ်ဆင်သည်။' },
      { n: '၃', title: 'မောင်းနှင်', body: 'သင်ကိုယ်တိုင် လည်ပတ်သည်။' },
    ],
  },
  contact: {
    title: 'ဆက်သွယ်ရန်',
    hint: 'အထူးအစီအစဉ် · ဈေးနှုန်း တောင်းခံလည်း ရပါသည်',
    asideHelp:
      'လုပ်ငန်းတွင် ပိတ်နေသော အဆင့်၊ လိုအပ်သော စိတ်ကြိုက် စဉ်၊ သို့မဟုတ် အထူးအစီအစဉ်အတွက် ဈေးနှုန်း တောင်းခံလိုပါက ရေးသားပေးပါ။',
    name: 'အမည်',
    phone: 'ဖုန်း / Telegram',
    niche: 'လုပ်ငန်းအမျိုးအစား',
    nichePick: 'ရွေးပါ…',
    message: 'အလုပ်ပိတ်နေသော နေရာ',
    placeholder:
      'ဥပမာ — ကျူရှင်ခ လိုက်မတောင်းနိုင်၊ သို့မဟုတ် စိတ်ကြိုက် လုပ်ငန်းစဉ် / ဈေးနှုန်း တောင်းခံလိုသည်…',
    send: 'စာပို့ရန်',
    thanks: 'ကျေးဇူးတင်ပါသည်။ Telegram မှလည်း ဆက်သွယ်နိုင်သည်။',
    mailName: 'အမည်',
    mailContact: 'ဖုန်း/Telegram',
    mailNiche: 'လုပ်ငန်း',
    tagline:
      'လုပ်ငန်းလည်ပတ်မှုကို ချောမွေ့စေသော စနစ် — စနစ်ကြီးဝယ်ရန်၊ သင်တန်းပေးရန်၊ အလုပ်လမ်းပြောင်းရန် မလိုအပ်ပါ။',
    niches: [
      'စားသောက်ဆိုင်',
      'ထောက်ပံ့ပို့ဆောင်ရေး (လမ်းကြောင်း / ခန့်မှန်း)',
      'ယာဉ်မောင်း / ပို့ဆောင်သူ',
      'ဖောက်သည် လမ်းကြောင်း · စကားပြော',
      'ဆိုင် ဂေဟစနစ်',
      'စတော့ / ပစ္စည်းထိန်းချုပ်',
      'လယ်ဂျာ / အလိုအလျောက် ငွေမှတ်',
      'ကြေးကောက်ခံမှု',
      'ကျူရှင် / ပညာရေးရုံး',
      'ဆေးခန်း / ရက်ချိန်း',
      'POS / ရှိပြီးသား စနစ် ချိတ်ဆက်',
      'ဉာဏ်ရည် · ပေါင်းထည့် အစီအစဉ်',
      'ဉာဏ်ရည် · မူရင်း အစီအစဉ်',
      'စိတ်ကြိုက် ဉာဏ်ရည် ပရောဂျက် · ဈေးနှုန်း တောင်းခံ',
      'အခမဲ့ တိုင်ပင်ဆွေးနွေး',
      'ဒစ်ဂျစ်တယ် စာတတ်မှု အစီအစဉ်',
      'အခြား',
    ],
  },
}

const en: Copy = {
  nav: [
    { id: 'page-front', label: 'Front' },
    { id: 'page-why', label: 'Why' },
    { id: 'page-engines', label: 'Verticals' },
    { id: 'page-samples', label: 'Samples' },
    { id: 'page-features', label: 'Features' },
    { id: 'page-operate', label: 'How' },
    { id: 'page-rates', label: 'Rates' },
    { id: 'page-order', label: 'Contact' },
  ],
  common: {
    tryCta: 'Try it',
    openMenu: 'Open menu',
    closeMenu: 'Close',
    prevPage: 'Previous page',
    nextPage: 'Next page',
    pageHint: '↑↓ pages',
    pagesAria: 'Choose page',
    perMonth: '/mo',
    recommended: '★ Recommended',
  },
  hero: {
    brandSub: 'PocketX · business operations engines',
    ribbons: [
      'No heavy system',
      'No long training',
      'Keep your workflow',
      'Telegram · Google Sheets',
    ],
    badge: 'Lead story',
    headline: 'Engines that smooth how your business runs.',
    body1:
      'Collections, queues, memberships, rentals, appointments—and more—tuned to how you already work. No buying a heavy system, no retraining staff from scratch, no forcing a new workflow.',
    body2Before: 'Run day to day on',
    body2Mid: 'and keep your records in',
    body2After:
      '. Custom workflows and AI add-ons can be fitted when you need them.',
    ctaTalk: 'Start a conversation',
    ctaHow: 'How it works →',
    wireLabel: 'Brief · tap to read',
    wire: [
      { q: 'What', a: 'Engines fitted to your operating rhythm' },
      { q: 'Why', a: 'Helps operations without freezing the work' },
      { q: 'How', a: 'Listen → fit → trial → run' },
    ],
    pledgeLabel: 'Pledge',
    pledge:
      'Technology should help the business—never become the thing that stalls it.',
  },
  why: {
    title: 'Why this',
    hint: 'Tap a panel to compare',
    intro:
      'Heavy systems bring training load, high cost, long onboarding, and custom app builds that stall work. PocketX fits the sub-system engines you need so operations stay light.',
    ourWay: 'Our way',
    oldWay: 'The old way',
    panels: [
      {
        bad: 'Buying a full enterprise stack — costly, slow to start, heavy hosting',
        good: 'Only the engines you need — live in days, light to maintain',
      },
      {
        bad: 'Building a new app or system — months, spend, forced process change',
        good: 'Improve flows on Telegram, Sheets, and Calendar you already use',
      },
      {
        bad: 'Retraining everyone — forgotten logins, tools that sit unused',
        good: 'Daily tools your team already knows — less training burden',
      },
      {
        bad: 'Making the business bend to the software',
        good: 'We bend the engines to your process — we do not break it',
      },
      {
        bad: 'Paying for every feature bundle — including what you do not need yet',
        good: 'Pick the features you need · custom scopes available',
      },
      {
        bad: 'Tech that freezes work, adds confusion, raises worry',
        good: 'AI and automation that assist — without blocking the floor',
      },
    ],
  },
  engines: {
    title: 'Industry verticals',
    hint: 'Verticals · ecosystem roles · more on request',
    intro:
      'Not only one trade at a time — drivers, customers, shops, and logistics can run as one connected ecosystem.',
    ask: 'Ask about this vertical',
    footer:
      'Not listed yet? Custom workflows are available — see output features in Samples.',
    items: [
      {
        id: 'restaurant',
        trade: 'Restaurants',
        kind: 'Shop floor',
        problem: 'Long queues · mixed orders · stockouts found too late',
        fix: 'Queueing · kitchen handoff · low-stock alerts — without changing how you work',
      },
      {
        id: 'logistics',
        trade: 'Logistics',
        kind: 'Goods movement',
        problem: 'Shipment trail · status · customer updates',
        fix: 'One trail from order to delivered — with records and alerts',
      },
      {
        id: 'driver',
        trade: 'Drivers / couriers',
        kind: 'Delivery crew',
        problem: 'Routing · task split · status hard to report',
        fix: 'Assign · route · complete — managed on Telegram',
      },
      {
        id: 'customer',
        trade: 'Customer channel',
        kind: 'Customer',
        problem: 'Scattered questions · order status unknown',
        fix: 'One chat channel · status view · alerts',
      },
      {
        id: 'shop-eco',
        trade: 'Shop ecosystem',
        kind: 'Whole shop',
        problem: 'Front · warehouse · delivery · money — all separate',
        fix: 'Link engines so the whole shop runs as one',
      },
      {
        id: 'billing',
        trade: 'Collections',
        kind: 'Receivables',
        problem: 'Who paid / who owes · hard to chase',
        fix: 'Schedules · receipts · automatic reminders — work keeps moving',
      },
      {
        id: 'tuition',
        trade: 'Tuition / school office',
        kind: 'Education office',
        problem: 'Student rolls · classes · parent calls overwhelm',
        fix: 'Rolls, attendance, office work — running on Telegram',
      },
      {
        id: 'clinic',
        trade: 'Clinic / bookings',
        kind: 'Appointments',
        problem: 'Double bookings · messy Facebook chats',
        fix: 'Slot booking · reminders · front-desk queue',
      },
    ],
  },
  samples: {
    title: 'Samples & how they run together',
    hint: 'Feature ticks · use-case scenes',
    tabSamples: 'Industry samples',
    tabScenarios: 'Together in action',
    hintSamples: 'Features you can equip by vertical',
    hintScenarios: 'How engines combine in real operations',
    chatBadge: 'Chat-ready',
    flowLabel: 'Operation steps',
    ticksLabel: 'Equippable features',
    tagAi: 'AI',
    tagStock: 'Stock',
    tagReport: 'Reports',
    askSample: 'Ask about this sample',
    seeScenarios: 'See together scenes',
    seeAiFeatures: 'AI features',
    sceneLabel: 'Use-case scene',
    askScene: 'Consult on this scene',
    customQuote: 'Custom quote',
    items: [
      {
        id: 'restaurant',
        trade: 'Restaurants',
        kind: 'Shop floor',
        blurb: 'From order to handoff — shorter queues, clearer stock.',
        flow: [
          'Customer orders on Telegram',
          'Auto handoff to kitchen / front',
          'Stock check · low-stock alert',
          'Sales & cash logged in Sheets',
        ],
        ticks: [
          'Queue / order status',
          'Stock control · low alerts',
          'Daily sales report',
          'Scheduled reminders',
          'Order / ask via chat',
          'Cash-in ledger',
        ],
        chat: 'Menu, order, status — one chat channel',
      },
      {
        id: 'logistics',
        trade: 'Logistics',
        kind: 'Goods movement',
        blurb: 'Route, estimate, deliver — one continuous trail.',
        flow: [
          'Accept order · emit ETA',
          'Optimize route · assign driver',
          'Live status on the road',
          'Delivered alert · close report',
        ],
        ticks: [
          'Route optimization',
          'ETA / cost estimates',
          'Shipment trail log',
          'Driver task list',
          'Customer updates',
          'Daily delivery report',
        ],
        chat: 'Order status, route ask, ETA — from chat',
      },
      {
        id: 'driver',
        trade: 'Drivers / couriers',
        kind: 'Delivery crew',
        blurb: 'Tasks, directions, completion — crew and office linked.',
        flow: [
          'Receive daily task list',
          'View route / address',
          'Mark arrived · delivered',
          'Report blockers to office',
        ],
        ticks: [
          'Task assignment list',
          'Directions / address',
          'Completion ticks',
          'Issue reports',
          'Daily performance brief',
          'Accept tasks via chat',
        ],
        chat: 'View tasks, mark done, ask help — on Telegram',
      },
      {
        id: 'shop-eco',
        trade: 'Shop ecosystem',
        kind: 'Whole shop',
        blurb: 'Front, warehouse, delivery, money, customer — one system.',
        flow: [
          'Customer orders / books',
          'Stock check · front acts',
          'Deliver or pick up in shop',
          'Ledger entry · view from control',
        ],
        ticks: [
          'Enterprise control dashboard',
          'Customer-facing view',
          'Stock · sales · delivery',
          'Automated ledger',
          'POS / existing system link',
          'Reports · alerts · chat',
        ],
        chat: 'Every department can connect through chat',
      },
      {
        id: 'billing',
        trade: 'Collections',
        kind: 'Receivables',
        blurb: 'Ledger, reminders, arrears — without chasing by hand.',
        flow: [
          'Customer / member list',
          'Issue fees · ledger entry',
          'Scheduled auto reminders',
          'Paid / outstanding summary',
        ],
        ticks: [
          'Automated ledger',
          'Paid / unpaid list',
          'Scheduled reminders',
          'Receipt log',
          'Overdue list',
          'Monthly collection report',
        ],
        chat: 'Ask balance, request receipt, confirm payment — via chat',
      },
      {
        id: 'clinic',
        trade: 'Clinic / bookings',
        kind: 'Appointments',
        blurb: 'Slots, reminders, queue — no doubles, no forgotten visits.',
        flow: [
          'Pick a slot · book',
          'Sync with Calendar',
          'Pre-visit reminder',
          'Attend / reschedule log',
        ],
        ticks: [
          'Slot schedule',
          'Calendar sync',
          'Scheduled reminders',
          'Queue / call-up',
          'Attendance log',
          'Book / move via chat',
        ],
        chat: 'Book, reschedule, ask time — on Telegram',
      },
      {
        id: 'tuition',
        trade: 'Tuition / school office',
        kind: 'Education office',
        blurb: 'Rolls, attendance, parent updates, fees — office flows.',
        flow: [
          'Student / class rolls',
          'Attendance ticks',
          'Parent alerts / updates',
          'Fees · office report',
        ],
        ticks: [
          'Student / class rolls',
          'Attendance ticks',
          'Parent alerts',
          'Fee collection / ledger',
          'Office report',
          'Ask / notify via chat',
        ],
        chat: 'Parents and office — one chat channel',
      },
      {
        id: 'customer',
        trade: 'Customer channel',
        kind: 'Customer',
        blurb: 'Ask, order, check status — one path.',
        flow: [
          'Customer reaches on Telegram',
          'Common questions auto-answered',
          'View order / booking status',
          'Hand off to staff if needed',
        ],
        ticks: [
          'Single chat channel',
          'Auto replies',
          'Order / booking view',
          'Alerts',
          'Staff handoff log',
          'Customer-facing view',
        ],
        chat: 'Any engine can be equipped with chat',
      },
    ],
    scenarios: [
      {
        id: 'deliver-chain',
        title: 'Shop to delivery',
        engines: ['Shop', 'Stock', 'Driver', 'Customer'],
        story: [
          'Customer orders from chat.',
          'Stock checks, then handoff to kitchen / warehouse.',
          'Route optimized · driver assigned.',
          'ETA shared · customer gets an alert.',
          'Cash logged · daily report closed.',
        ],
        result:
          'No new app build — linked engines complete the delivery chain.',
      },
      {
        id: 'ledger-stock',
        title: 'Money and stock together',
        engines: ['Stock', 'Ledger', 'Alerts', 'Control'],
        story: [
          'Every sale reduces stock.',
          'Cash in/out posts to the ledger automatically.',
          'Near stockout · scheduled alert fires.',
          'Owner sees sales / balances from control.',
        ],
        result:
          'No hand-chasing lists — stock and money stay clear together.',
      },
      {
        id: 'fleet-day',
        title: 'A courier crew day',
        engines: ['Routing', 'Drivers', 'Estimate', 'Reports'],
        story: [
          'Morning task list is issued.',
          'Routes optimized · durations estimated.',
          'Drivers accept via chat · tick completions.',
          'Evening report · remaining tasks listed.',
        ],
        result:
          'Office and field crew meet in one chat-and-record stream.',
      },
      {
        id: 'clinic-day',
        title: 'Booking to payment',
        engines: ['Booking', 'Alerts', 'Queue', 'Ledger'],
        story: [
          'Customer books a slot.',
          'Pre-visit reminder arrives.',
          'Check-in queue · call-up.',
          'Service done · fee / receipt hits the ledger.',
        ],
        result:
          'Double books, no-shows, lost payments — cleared as one flow.',
      },
    ],
  },
  features: {
    title: 'Intelligence & features',
    hint: 'Automation · chat · custom quote',
    intro:
      'Instead of building a full app or heavy stack — fit only the engines you need and smooth operations with intelligence. Hosting and upkeep stay light.',
    aiLabel: 'AI / automation capabilities',
    ai: [
      {
        title: 'Route optimization',
        body: 'Tighten delivery routes · save fuel and time',
      },
      {
        title: 'Estimates',
        body: 'ETA · cost · capacity estimates',
      },
      {
        title: 'Ledger / accounts',
        body: 'Cash in/out · automated ledger posts',
      },
      {
        title: 'Stock control',
        body: 'Stockouts · reorder · warehouse rolls',
      },
      {
        title: 'Scheduled alerts',
        body: 'Bookings · fees · tasks — on time',
      },
      {
        title: 'Reporting',
        body: 'Daily · monthly briefs on Telegram or Sheets',
      },
    ],
    chatLabel: 'Chat-equipped',
    chatTitle: 'Any feature · Telegram',
    chatBody:
      'From orders to reports — ask, log, and manage from one chat channel.',
    chatEquip: [
      'Orders / queues',
      'Delivery status',
      'Cash / receipts',
      'Stock queries',
      'Bookings',
      'Request reports',
    ],
    dashOrg: 'Enterprise',
    dashOrgTitle: 'Control dashboard',
    dashOrgBody: 'Branches · stock · money · reports',
    dashCust: 'Customer',
    dashCustTitle: 'Customer view',
    dashCustBody: 'Status · bookings · alerts',
    quoteLabel: 'Custom project · quote',
    quoteBody:
      'Pick features by vertical, set project scope, and receive a separate quote. No need to buy a heavy system.',
    quoteCta: 'Request quote',
    samplesCta: 'Samples / together',
    contactCta: 'Contact',
  },
  operate: {
    title: 'How we work',
    hint: 'Sub-engines · intelligence · quoted scope',
    intro:
      'Not a full-system replacement — the engines you need, smoothed with intelligence and automation. Hosting and upkeep stay light.',
    steps: [
      {
        n: '1',
        title: 'Listen',
        body: 'We hear the stuck step, needed features, and project scope.',
      },
      {
        n: '2',
        title: 'Fit engines',
        body: 'Pick only what you need · link as an ecosystem · add intelligence.',
      },
      {
        n: '3',
        title: 'Trial',
        body: 'Run with your team and tune what needs adjusting.',
      },
      {
        n: '4',
        title: 'Operate & teach',
        body: 'Hands-on practice so you can run on everyday tools.',
      },
    ],
    caps: [
      {
        title: 'Sub-engines — without building an app',
        body: 'Full app or system builds cost time and money. PocketX fits only the engines you need so operations improve.',
      },
      {
        title: 'Intelligence for operations',
        body: 'Routing, estimates, ledgers, stock, and alerts can be paired with AI / automation.',
      },
      {
        title: 'Link what you already use',
        body: 'No need to abandon POS or other systems. Connect via API and keep data flowing.',
      },
      {
        title: 'Digital literacy program',
        body: 'Owners and teams learn to run Telegram, Google Sheets, and Calendar themselves.',
      },
      {
        title: 'Custom project · quote',
        body: 'Vertical, feature list, and scope shape a custom plan and quote. Free consultation first.',
      },
    ],
    startLabel: 'Get started',
    startBody:
      'Feature lists, project scope, AI pairing, or multi-branch needs — free consult first, then a quote if you want one.',
    freeConsult: 'Free consultation',
    samplesCta: 'Samples / together',
    formCta: 'Fill the contact form',
  },
  pricing: {
    title: 'Pricing',
    hint: 'What you pay · what you get',
    intro:
      'Pick one plan. Each card shows what you pay each month and exactly what you get.',
    youPay: 'You pay',
    youGet: 'You get',
    startCta: 'Choose this plan',
    coreLabel: '1 · Business engine plans',
    aiLabel: '2 · AI (optional add-on)',
    aiIntro:
      'Separate from the plans above. Start with a normal plan first — add AI later only if you need it.',
    aiStart: 'Add AI',
    quoteLabel: 'Need something custom?',
    quoteBody:
      'Multi-branch, POS linking, or special AI work can be quoted separately.',
    quoteCta: 'Ask for a quote',
    core: [
      {
        id: 'basic',
        name: 'Basic',
        forWho: 'For fixing one stuck job',
        price: '$10',
        gets: [
          '1 engine (e.g. queue or collections)',
          'Up to 50 records',
          '7-day free trial',
        ],
        hot: false,
      },
      {
        id: 'pro',
        name: 'Pro',
        forWho: 'For running a few jobs together',
        price: '$45',
        gets: [
          'Up to 3 engines',
          'Up to 500 records',
          'Custom fields',
          'Setup help to get started',
        ],
        hot: true,
      },
      {
        id: 'enterprise',
        name: 'Enterprise',
        forWho: 'For branches or departments',
        price: '$100',
        gets: [
          'Unlimited engines',
          'Owner control dashboard',
          'Customer-facing view',
          'Link to your existing POS',
          'Priority support',
        ],
        hot: false,
      },
    ],
    ai: [
      {
        id: 'ai-addon',
        name: 'AI Light',
        forWho: 'Add chat & alerts on top of your plan',
        price: '$25',
        gets: [
          'Ask and act on Telegram',
          'On-time reminders',
          'Daily report brief',
        ],
      },
      {
        id: 'ai-native',
        name: 'AI Full',
        forWho: 'For routing, ledger, and stock automation',
        price: '$60',
        gets: [
          'Route optimize / time estimates',
          'Auto money ledger',
          'Stock control',
          'Reports + chat channel',
        ],
      },
    ],
  },
  howItWorks: {
    title: 'In brief',
    steps: [
      { n: '1', title: 'Consult', body: 'We listen to the need.' },
      { n: '2', title: 'Connect', body: 'We fit the ecosystem.' },
      { n: '3', title: 'Drive', body: 'You run it yourself.' },
    ],
  },
  contact: {
    title: 'Contact',
    hint: 'Custom plans · quotes welcome',
    asideHelp:
      'Tell us the stuck step, the custom flow you need, or ask for a quote on a special plan.',
    name: 'Name',
    phone: 'Phone / Telegram',
    niche: 'Vertical / interest',
    nichePick: 'Choose…',
    message: 'Where work is stuck',
    placeholder:
      'e.g. cannot chase tuition fees, or want a custom workflow / quote…',
    send: 'Send',
    thanks: 'Thank you. You can also reach us on Telegram.',
    mailName: 'Name',
    mailContact: 'Phone/Telegram',
    mailNiche: 'Vertical',
    tagline:
      'A system that smooths operations — without buying a heavy stack, long training, or forcing a new workflow.',
    niches: [
      'Restaurants',
      'Logistics (routing / estimates)',
      'Drivers / couriers',
      'Customer channel · chat',
      'Shop ecosystem',
      'Stock control',
      'Ledger / automated accounting',
      'Collections',
      'Tuition / school office',
      'Clinic / bookings',
      'POS / existing system link',
      'AI · Add-on plan',
      'AI · Native plan',
      'Custom AI project · quote',
      'Free consultation',
      'Digital literacy program',
      'Other',
    ],
  },
}

export const copy: Record<Lang, Copy> = { my, en }
