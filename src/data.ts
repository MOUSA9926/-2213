export type Rule = {
  id: number;
  title: string;
  description: string;
  notes: string[];
  icon: string;
};

export type AgreementData = {
  title: string;
  kingdom: string;
  subtitle: string;
  rules: Rule[];
  footerDesigner: string;
  footerKingdom?: string;
};

export const translations: Record<string, AgreementData> = {
  ar: {
    title: "NAP",
    kingdom: "مملكة 2213",
    subtitle: "",
    footerDesigner: "تم تصميم الموقع من قبل",
    footerKingdom: "KINGDOM 2213",
    rules: [
      {
        id: 1,
        title: "الهجوم والتجسس",
        description: "يلتزم أعضاء التحالفات ضمن هذا الاتفاق التزاماً تاماً بعدم شن أي هجوم أو تجسس على قلاع أو حقول الموارد أو لافتة التحالف التابعة لأعضاء التحالفات الاخرى ضمن هذا الاتفاق ويشمل ذلك المزارع والأكاديمية التابعة للتحالف.",
        notes: ["يجب ان يكون اسم المزرعة او الأكاديمية بنفس اسم التحالف الاساسي."],
        icon: "Shield"
      },
      {
        id: 2,
        title: "المزارع والأكاديميات",
        description: "يحق لكل تحالف امتلاك مزرعة وأكاديمية واحدة بحسب الاتفاق.",
        notes: [],
        icon: "Home"
      },
      {
        id: 3,
        title: "منع الدعم العسكري",
        description: "لا يجوز لأي طرف تقديم دعم عسكري أو تعزيزات لأي حلف اخر يدخل في حرب ضد أحد أطراف هذه الاتفاقية سواء فردي او جماعي حيث لا يمكن مغادرة التحالف الاساسي والانتقال الى حلف اخر بهدف الالتفاف وتقديم المساعدة في حرب ليست حربه.",
        notes: [],
        icon: "Swords"
      },
      {
        id: 4,
        title: "السلوك العام",
        description: "يمنع السب والشتم والإساءة في الدردشة العامة ويمنع التحريض على الفتن بين التحالفات ويجب احترام جميع أعضاء السيرفر وعدم التحدث في امور دينية او سياسية.",
        notes: [],
        icon: "MessageSquare"
      },
      {
        id: 5,
        title: "منع الاستقطاب",
        description: "يمنع منعاً باتاً التحدث مع اعضاء التحالفات ضمن هذا الاتفاق بهدف استقطابهم ومحاولة توظيفهم سواءً من القائد او المساعدين او اعضاء تحالفه.",
        notes: [],
        icon: "Users"
      },
      {
        id: 6,
        title: "الاحتكار وتوزيع المأوى",
        description: "يتم توزيع المأوى بشكل متساوي ولا يحق لأي تحالف اخر أن يأخذ اكثر مما يحق له.",
        notes: [
          "يتم اختيار المأوى للتحالفات اعتمادا على تصنيف المملكة.",
          "المنافسة على القلاع (1-2-3-4) ولكل تحالف يحق له اختيار قلعة واحدة فقط.",
          "التحالف الذي يأخذ اكثر من ما هو محدد له يعتبر قد اخذ حصته مقدما ولن يأخذ في المرة القادمة."
        ],
        icon: "Landmark"
      },
      {
        id: 7,
        title: "الخروج من NAP",
        description: "التحالف ضمن هذا الاتفاق لديه فرصة يومين من اجل استعادة مركزه في التصنيف، بمجرد انتهاء المهلة يعتبر خارج الاتفاق ليحل مكانه التحالف الذي احتل مركزه.",
        notes: [],
        icon: "Clock"
      },
      {
        id: 8,
        title: "حل الخلافات",
        description: "يجب ان يتحدث القادة فيما بينهم بشكل خاص للتوصل الى حل ودي بينهم اولا، وفي حال عدم التوصل الى حل يمكن رفع القضية إلى المجلس مع تقديم الأدلة من خلال تقرير الهجوم او لقطة شاشة ليتم النظر الى حجم الضرر والتصويت لوضع عقوبات على المتسبب من قبل المجلس.",
        notes: ["يسقط حق المشتكي في حال قدم القضية للمجلس دون ان يتواصل مع قائد التحالف المتسبب لحل الخلاف بينهم بشكل خاص اولا."],
        icon: "Scale"
      },
      {
        id: 9,
        title: "العقوبات",
        description: "يطبق المجلس العقوبات التالية في حال خرق الاتفاقية:",
        notes: [
          "في حال كان هجوم عن طريق الخطأ يجب تقديم اعتذار من قبل المتسبب للطرف المتضرر وتعويضه بالموارد التي خسرها.",
          "عند حدوث خرق من قبل احد الاعضاء وبعد تصويت المجلس يتم طرده وعدم استقباله في تحالفات NAP لمدة يومين ، ثم يتمكن من العودة بعد انتهاء عقوبته.",
          "طرد القائد واخراج تحالفه من NAP في حال أصر على خرق الاتفاقيات."
        ],
        icon: "Gavel"
      },
      {
        id: 10,
        title: "المطلوبون والمتمردون",
        description: "يُمنع استقبال أي لاعب \"مطلوب\" أو \"متمرد\" هارب من عقاب المجلس في أي من التحالفات العشرة. أي تحالف يستقبل المطلوبين سيعد خارقاً للاتفاقية.",
        notes: [],
        icon: "UserX"
      }
    ]
  },
  en: {
    title: "NAP",
    kingdom: "Kingdom 2213",
    subtitle: "",
    footerDesigner: "Website designed by",
    footerKingdom: "KINGDOM 2213",
    rules: [
      {
        id: 1,
        title: "Attack and Espionage",
        description: "Alliance members within this pact are strictly committed to not launching any attacks or espionage on castles, resource tiles, or alliance banners belonging to other alliance members within this pact, including alliance farms and academies.",
        notes: ["The farm or academy must have the same name as the main alliance."],
        icon: "Shield"
      },
      {
        id: 2,
        title: "Farms and Academies",
        description: "Each alliance has the right to own one farm and one academy according to the agreement.",
        notes: [],
        icon: "Home"
      },
      {
        id: 3,
        title: "Prevention of Military Support",
        description: "No party may provide military support or reinforcements to any other alliance that goes to war against any party of this pact. It is not allowed to leave the main alliance to assist in a war that is not theirs.",
        notes: [],
        icon: "Swords"
      },
      {
        id: 4,
        title: "General Conduct",
        description: "Insulting, cursing, and offensive language in public chat are prohibited. Incitement of conflict between alliances is forbidden. All server members must be respected, and religious or political topics must not be discussed.",
        notes: [],
        icon: "MessageSquare"
      },
      {
        id: 5,
        title: "Prevention of Recruitment",
        description: "It is strictly forbidden to talk with members of alliances within this agreement with the aim of recruiting them, whether by the leader, R4s, or alliance members.",
        notes: [],
        icon: "Users"
      },
      {
        id: 6,
        title: "Monopoly and Shelter Distribution",
        description: "Shelters are distributed equally, and no alliance has the right to take more than it is entitled to.",
        notes: [
          "Shelter selection for alliances is based on kingdom ranking.",
          "Competition is for Castles (1-2-3-4), and each alliance is entitled to choose only one castle.",
          "An alliance that takes more than its allocated share is considered to have taken its share in advance and will not get one next time."
        ],
        icon: "Landmark"
      },
      {
        id: 7,
        title: "Exiting NAP",
        description: "An alliance within this pact has a two-day grace period to regain its position in the ranking. Once the deadline expires, they are considered out of the pact.",
        notes: [],
        icon: "Clock"
      },
      {
        id: 8,
        title: "Dispute Resolution",
        description: "Leaders must talk privately among themselves to reach an amicable solution first. If no solution is reached, the case can be raised to the council with evidence provided through battle reports or screenshots to vote on imposing penalties.",
        notes: ["The complainant forfeits their right if they submit the case to the council without first contacting the offending alliance leader."],
        icon: "Scale"
      },
      {
        id: 9,
        title: "Penalties",
        description: "The council will apply the following penalties in case of agreement breach:",
        notes: [
          "If an attack was by mistake, an apology must be submitted by the offender, and they must be compensated for lost resources.",
          "When a breach occurs by a member, after a council vote, they will be expelled and not welcomed in NAP alliances for two days.",
          "Expulsion of the leader and removing their alliance from NAP if they insist on violating the agreements."
        ],
        icon: "Gavel"
      },
      {
        id: 10,
        title: "Wanted and Rebels",
        description: "It is forbidden to welcome any 'wanted' or 'rebel' player fleeing from council punishment in any of the ten alliances.",
        notes: [],
        icon: "UserX"
      }
    ]
  },
  tr: {
    title: "NAP",
    kingdom: "Krallık 2213",
    subtitle: "",
    footerDesigner: "Web sitesi tarafından tasarlandı",
    footerKingdom: "KRALLIK 2213",
    rules: [
      {
        id: 1,
        title: "Saldırı ve Casusluk",
        description: "Bu pakt içindeki ittifak üyeleri, pakt içindeki diğer ittifak üyelerine ait kalelere, kaynak alanlarına veya ittifak sancaklarına herhangi bir saldırı veya casusluk yapmamayı taahhüt eder.",
        notes: ["Çiftlik veya akademinin adı ana ittifakla aynı olmalıdır."],
        icon: "Shield"
      },
      {
        id: 2,
        title: "Çiftlikler ve Akademiler",
        description: "Her ittifak, anlaşmaya göre bir çiftlik ve bir akademiye sahip olma hakkına sahiptir.",
        notes: [],
        icon: "Home"
      },
      {
        id: 3,
        title: "Askeri Destek Yasağı",
        description: "Hiçbir taraf, bu paktın herhangi bir tarafına karşı savaşa giren başka bir ittifaka askeri destek sağlayamaz. Ana ittifaktan ayrılıp başkasının savaşına yardım etmek yasaktır.",
        notes: [],
        icon: "Swords"
      },
      {
        id: 4,
        title: "Genel Davranış",
        description: "Genel sohbette hakaret, küfür ve kırıcı dil kullanmak yasaktır. İttifaklar arasında çatışma kışkırtmak yasaktır. Sunucu üyelerine saygı gösterilmeli ve dini/siyasi konular tartışılmamalıdır.",
        notes: [],
        icon: "MessageSquare"
      },
      {
        id: 5,
        title: "Üye Toplama Yasağı",
        description: "Lider veya üyeler tarafından, onları ittifaka katmak amacıyla bu anlaşma içindeki ittifakların üyeleriyle konuşmak kesinlikle yasaktır.",
        notes: [],
        icon: "Users"
      },
      {
        id: 6,
        title: "Tekel ve Sığınak Dağıtımı",
        description: "Sığınaklar eşit olarak dağıtılır ve hiçbir ittifakın hakkından fazlasını alma hakkı yoktur.",
        notes: [
          "İttifaklar için sığınak seçimi krallık sıralamasına dayalıdır.",
          "Rekabet Kaleler (1-2-3-4) içindir ve her ittifak sadece bir kale seçme hakkına sahiptir.",
          "Payından fazlasını alan bir ittifak, payını peşin almış sayılır ve bir dahaki sefere alamaz."
        ],
        icon: "Landmark"
      },
      {
        id: 7,
        title: "NAP'tan Çıkış",
        description: "Bu pakt içindeki bir ittifakın sıralamadaki konumunu geri kazanmak için iki günlük bir mühleti vardır. Süre dolduğunda pakttan çıkmış sayılırlar.",
        notes: [],
        icon: "Clock"
      },
      {
        id: 8,
        title: "Anlaşmazlık Çözümü",
        description: "Liderler, dostane bir çözüme ulaşmak için önce kendi aralarında konuşmalıdır. Çözüme ulaşılamazsa savaş raporları aracılığıyla sağlanan kanıtlarla dava konseye taşınabilir.",
        notes: ["Şikayetçi, karşı ittifak lideriyle iletişime geçmeden davayı konseye sunarsa hakkını kaybeder."],
        icon: "Scale"
      },
      {
        id: 9,
        title: "Cezalar",
        description: "Konsey, anlaşma ihlali durumunda aşağıdaki cezaları uygulayacaktır:",
        notes: [
          "Saldırı yanlışlıkla olmuşsa, özür sunulmalı ve kaybedilen kaynaklar tazmin edilmelidir.",
          "Bir üye tarafından bir ihlal gerçekleştiğinde, ihraç edilecekler ve iki gün boyunca NAP'ta barındırılmayacaklar.",
          "Liderin anlaşmaları ihlal etmekte ısrar etmesi durumunda ittifakının NAP'tan çıkarılması."
        ],
        icon: "Gavel"
      },
      {
        id: 10,
        title: "Arananlar ve İsyancılar",
        description: "Konsey cezasından kaçan aranan veya isyancı hiçbir oyuncuyu herhangi bir ittifakta barındırmak yasaktır.",
        notes: [],
        icon: "UserX"
      }
    ]
  },
  zh: {
    title: "NAP",
    kingdom: "王国 2213",
    subtitle: "",
    footerDesigner: "网站设计由",
    footerKingdom: "KINGDOM 2213",
    rules: [
      {
        id: 1,
        title: "攻击与间谍活动",
        description: "加入本条约的联盟成员必须严格遵守规定，不得对本条约内其他联盟成员（包括农场和学院）的城堡、资源点或联盟旗帜发起任何攻击或间谍活动。",
        notes: ["农场或学院必须与主联盟同名。"],
        icon: "Shield"
      },
      {
        id: 2,
        title: "农场与学院",
        description: "根据协议，每个联盟有权拥有一个农场和一个学院。",
        notes: [],
        icon: "Home"
      },
      {
        id: 3,
        title: "禁止军事支援",
        description: "任何一方不得向与本条约任何一方交战的其他联盟提供军事支援或增援。不允许离开主联盟去协助非本联盟的战争。",
        notes: [],
        icon: "Swords"
      },
      {
        id: 4,
        title: "一般行为规范",
        description: "公共频道中禁止出现侮辱、咒骂和攻击性语言。禁止挑起联盟之间的冲突。必须尊重服务器上的所有成员，不得讨论宗教或政治话题。",
        notes: [],
        icon: "MessageSquare"
      },
      {
        id: 5,
        title: "禁止挖人",
        description: "严禁任何联盟的盟主、R4或成员以招募为目的，与本协议内其他联盟的成员私下交流。",
        notes: [],
        icon: "Users"
      },
      {
        id: 6,
        title: "庇护所分配与垄断",
        description: "庇护所平均分配，任何联盟都无权索取超出其应得的份额。",
        notes: [
          "联盟的庇护所选择权基于王国排名。",
          "竞争限定于城堡（1-2-3-4），每个联盟有权且只能选择一个城堡。",
          "如果联盟占据了超过分配份额的庇护所，将被视为提前预支其份额，下一次将不再分配。"
        ],
        icon: "Landmark"
      },
      {
        id: 7,
        title: "退出NAP",
        description: "本条约内的联盟有两个宽限日来恢复其排名位置。一旦期限到期未能恢复，将被视为退出本条约。",
        notes: [],
        icon: "Clock"
      },
      {
        id: 8,
        title: "争议解决",
        description: "盟主必须首先私下协商以达成友好解决方案。如果未能达成解决方案，则可以将案件提交给委员会，并通过战斗报告或截图提供证据，以投票决定实施相应的处罚。",
        notes: ["如果申诉人在未事先联系违规联盟盟主的情况下直接将案件提交给委员会，则丧失其申诉权利。"],
        icon: "Scale"
      },
      {
        id: 9,
        title: "处罚规定",
        description: "发生违反协议的情况时，委员会将实施以下处罚：",
        notes: [
          "如果攻击是失误造成的，违法者必须出面道歉，并赔偿损失的资源。",
          "当联盟成员违反协议时，经委员会投票决定，该成员将被驱逐，并在两天内不得加入任何NAP联盟。",
          "如果盟主坚持违反协议，将罢免其盟主职务并将该联盟从NAP中除名。"
        ],
        icon: "Gavel"
      },
      {
        id: 10,
        title: "通缉与叛乱者",
        description: "十大联盟中的任何一个都禁止收留任何正在逃避委员会惩罚的“通缉犯”或“叛乱”玩家。",
        notes: [],
        icon: "UserX"
      }
    ]
  },
  ko: {
    title: "NAP",
    kingdom: "왕국 2213",
    subtitle: "",
    footerDesigner: "웹사이트 제작:",
    footerKingdom: "KINGDOM 2213",
    rules: [
      {
        id: 1,
        title: "공격 및 첩보 활동",
        description: "본 조약에 가입한 연맹원은 본 조약 내 다른 연맹원(연맹 농장 및 아카데미 포함)의 성, 자원지 또는 연맹 깃발에 대한 어떠한 공격이나 첩보 활동도 하지 않을 것을 엄격히 약속합니다.",
        notes: ["농장이나 아카데미는 본 연맹과 이름이 동일해야 합니다."],
        icon: "Shield"
      },
      {
        id: 2,
        title: "농장 및 아카데미",
        description: "협약에 따라 각 연맹은 하나의 농장과 하나의 아카데미를 소유할 권리가 있습니다.",
        notes: [],
        icon: "Home"
      },
      {
        id: 3,
        title: "군사 지원 방지",
        description: "어떠한 당사자도 본 조약의 다른 당사자와 전쟁을 벌이는 연맹에 군사 지원이나 증원군을 제공할 수 없습니다. 타인의 전쟁을 돕기 위해 본 연맹을 떠나는 것은 허용되지 않습니다.",
        notes: [],
        icon: "Swords"
      },
      {
        id: 4,
        title: "일반 행위 규범",
        description: "공개 채팅에서 모욕, 욕설 및 불쾌한 언어 사용은 금지됩니다. 연맹 간의 갈등 조장은 금지됩니다. 서버의 모든 구성원은 존중받아야 하며 종교적 또는 정치적 주제에 대해 논의해서는 안 됩니다.",
        notes: [],
        icon: "MessageSquare"
      },
      {
        id: 5,
        title: "스카우트 방지",
        description: "맹주, R4 또는 연맹원을 불문하고 스카우트를 목적으로 본 협약 내 연맹원과 접촉하는 것은 엄격히 금지됩니다.",
        notes: [],
        icon: "Users"
      },
      {
        id: 6,
        title: "독점 금지 및 보호소 분배",
        description: "보호소는 평등하게 분배되며, 어떤 연맹도 자격을 넘는 몫을 차지할 권리가 없습니다.",
        notes: [
          "연맹의 보호소 선택권은 왕국 순위를 기준으로 합니다.",
          "경쟁은 성(1, 2, 3, 4)에 대해서만 적용되며, 각 연맹은 하나의 성만 선택할 권리가 있습니다.",
          "할당된 몫 이상을 차지하는 연맹은 다음 번 할당량을 미리 가져간 것으로 간주되어 다음에는 보호소가 분배되지 않습니다."
        ],
        icon: "Landmark"
      },
      {
        id: 7,
        title: "NAP 종료/이탈",
        description: "조약 내 연맹은 순위를 회복할 수 있는 2일간의 유예 기간을 갖습니다. 유예 기간이 만료되면 조약에서 이탈한 것으로 간주됩니다.",
        notes: [],
        icon: "Clock"
      },
      {
        id: 8,
        title: "분쟁 해결",
        description: "맹주들은 먼저 원만한 해결책에 도달하기 위해 개인적으로 대화를 나누어야 합니다. 해결책에 도달하지 못한 경우, 전투 보고서나 스크린샷 등을 증거로 제시하여 위원회에 사건을 제기하고 처벌 적용 여부를 투표할 수 있습니다.",
        notes: ["침해 연맹 맹주에게 먼저 연락하지 않고 위원회에 사건을 제출하는 경우 불만 제기자의 권리가 상실됩니다."],
        icon: "Scale"
      },
      {
        id: 9,
        title: "처벌",
        description: "협정 위반 시 위원회는 다음과 같은 처벌을 적용합니다:",
        notes: [
          "실수로 공격한 경우, 공격자는 사과해야 하며 손실된 자원을 보상해야 합니다.",
          "연맹원이 위반한 경우, 위원회 투표를 거쳐 추방되며 이틀 동안 NAP 연맹에 합류할 수 없습니다.",
          "맹주가 협정을 계속 위반할 경우 맹주를 추방하고 해당 연맹을 NAP에서 제외시킵니다."
        ],
        icon: "Gavel"
      },
      {
        id: 10,
        title: "수배자 및 반역자",
        description: "위원회 처벌을 피해 도망치는 '수배자' 또는 '반역자' 플레이어를 10대 연맹 중 어느 곳에서도 받아주는 것은 금지되어 있습니다.",
        notes: [],
        icon: "UserX"
      }
    ]
  },
  pt: {
    title: "NAP",
    kingdom: "Reino 2213",
    subtitle: "",
    footerDesigner: "Site desenvolvido por",
    footerKingdom: "KINGDOM 2213",
    rules: [
      {
        id: 1,
        title: "Ataque e Espionagem",
        description: "Os membros da aliança dentro deste pacto estão estritamente comprometidos a não iniciar ataques ou espionagens aos castelos, recursos ou bandeiras de outros membros das alianças participantes deste pacto, incluindo farms e academias da aliança.",
        notes: ["A farm ou academia deve ter o mesmo nome da aliança principal."],
        icon: "Shield"
      },
      {
        id: 2,
        title: "Farms e Academias",
        description: "Cada aliança tem o direito de possuir uma farm e uma academia, de acordo com o acordo.",
        notes: [],
        icon: "Home"
      },
      {
        id: 3,
        title: "Prevenção de Apoio Militar",
        description: "Nenhuma parte pode fornecer suporte militar ou reforços a qualquer outra aliança que entre em guerra contra qualquer participante deste pacto. Não é permitido sair da aliança principal para ajudar em uma guerra de terceiros.",
        notes: [],
        icon: "Swords"
      },
      {
        id: 4,
        title: "Conduta Geral",
        description: "Insultos, xingamentos e linguagem ofensiva no chat global são proibidos. A incitação de conflitos entre alianças também é proibida. Todos os membros do servidor devem ser respeitados, e tópicos religiosos ou políticos não devem ser discutidos.",
        notes: [],
        icon: "MessageSquare"
      },
      {
        id: 5,
        title: "Prevenção de Recrutamento",
        description: "É estritamente proibido conversar com membros de alianças dentro deste acordo com o objetivo de recrutá-los, seja pelo líder, R4 ou qualquer membro da aliança.",
        notes: [],
        icon: "Users"
      },
      {
        id: 6,
        title: "Monopólio e Distribuição de Abrigos",
        description: "Os abrigos são distribuídos igualmente, e nenhuma aliança tem o direito de receber mais do que sua cota permitida.",
        notes: [
          "A seleção dos abrigos para as alianças é baseada no ranking do reino.",
          "A competição é apenas para os Castelos (1-2-3-4), e cada aliança tem o direito de escolher apenas um castelo.",
          "A aliança que pegar mais abrigos do que sua cota permitida será considerada como tendo pego seu abrigo antecipadamente e não receberá a próxima alocação."
        ],
        icon: "Landmark"
      },
      {
        id: 7,
        title: "Saindo do NAP",
        description: "Uma aliança dentro deste pacto tem um período de carência de dois dias para recuperar sua posição no ranking. Uma vez que o prazo expire, eles estarão fora do pacto.",
        notes: [],
        icon: "Clock"
      },
      {
        id: 8,
        title: "Resolução de Disputas",
        description: "Os líderes devem primeiro conversar em particular para chegar a uma solução amigável. Se nenhuma resolução for alcançada, o caso pode ser levado ao conselho com provas, através de relatórios de batalhas ou capturas de tela (prints), para votar em quais penalidades impor.",
        notes: ["O reclamante perde o direito a punição se levar o caso diretamente ao conselho sem antes tentar contato com o líder da aliança infratora."],
        icon: "Scale"
      },
      {
        id: 9,
        title: "Penalidades",
        description: "O conselho aplicará as seguintes penalidades em caso de violação do acordo:",
        notes: [
          "Se o ataque foi por engano, deve ser submetido um pedido de desculpas pelo ofensor, com a compensação dos recursos perdidos.",
          "Quando ocorrer uma quebra de regra por um membro, após a votação do conselho, ele será expulso e não será bem-vindo nas alianças NAP por dois dias.",
          "Expulsão do líder e remoção de sua aliança do NAP se o mesmo insistir na violação dos acordos."
        ],
        icon: "Gavel"
      },
      {
        id: 10,
        title: "Procurados e Rebeldes",
        description: "É expressamente proibido acolher qualquer jogador classificado como 'procurado' ou 'rebelde' que esteja fugindo de sanções e punições do concelho em qualquer uma das 10 alianças.",
        notes: [],
        icon: "UserX"
      }
    ]
  }
};
