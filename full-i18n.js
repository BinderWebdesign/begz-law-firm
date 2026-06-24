(function(){
  'use strict';
  const IDX={en:0,zh:1,ko:2};
  const D={
    "BEGZ Law Firm — Хуулийн Фирм":["BEGZ Law Firm — Law Firm","BEGZ律师事务所 — 法律服务","BEGZ Law Firm — 법률사무소"],
    "Нүүр":["Home","首页","홈"],"Нүүр хуудас":["Home page","首页","홈페이지"],"Бидний тухай":["About Us","关于我们","회사 소개"],"Танилцуулга":["Overview","简介","소개"],"Манай баг":["Our Team","我们的团队","우리 팀"],"Бид хэрхэн ажилладаг вэ":["How We Work","我们的工作方式","업무 방식"],"Уулзалт товлох":["Book a Consultation","预约咨询","상담 예약"],"Уулзалт товлох →":["Book a Consultation →","预约咨询 →","상담 예약 →"],
    "Үйлчилгээ":["Services","服务","서비스"],"Хууль зүйн зөвлөх үйлчилгээ":["Legal Advisory","法律顾问服务","법률 자문 서비스"],"Шүүхэд төлөөлөх үйлчилгээ":["Court Representation","诉讼代理服务","법원 대리 서비스"],"Өмгөөллийн үйлчилгээ":["Advocacy Service","律师辩护服务","변호 서비스"],"Мэдээлэл":["Information","信息","정보"],"Түүхэн товчоо":["History","发展历程","연혁"],"Хууль зүйн мэдээлэл":["Legal Information","法律信息","법률 정보"],"Түгээмэл асуулт хариулт":["Frequently Asked Questions","常见问题","자주 묻는 질문"],"Шүүхийн шийдвэрийн тойм мэдээ":["Court Decision Case Reviews","法院判决案例综述","법원 판결 사례 리뷰"],"Лого татах":["Download Logo","下载标识","로고 다운로드"],"Холбоо барих":["Contact","联系我们","연락처"],"Зөвлөгөө авах":["Get Advice","获取咨询","상담 받기"],"Зөвлөгөө авах →":["Get Advice →","获取咨询 →","상담 받기 →"],"Үнэгүй анхан шатны зөвлөгөө →":["Free Initial Consultation →","免费初次咨询 →","무료 초기 상담 →"],"Үйлчилгээ харах":["View Services","查看服务","서비스 보기"],"Дэлгэрэнгүй унших":["Read More","阅读更多","자세히 보기"],"Дэлгэрэнгүй →":["Learn More →","了解更多 →","자세히 보기 →"],"Унших →":["Read →","阅读 →","읽기 →"],"Бүх нийтлэл →":["All Articles →","全部文章 →","전체 글 →"],
    "Хэл сонгох":["Choose language","选择语言","언어 선택"],"Монгол":["Mongolian","蒙古语","몽골어"],"Монгол хэл":["Mongolian","蒙古语","몽골어"],"Цэс":["Menu","菜单","메뉴"],"Цэс нээх":["Open menu","打开菜单","메뉴 열기"],"Үндсэн цэс":["Main menu","主菜单","기본 메뉴"],"Хаах":["Close","关闭","닫기"],"Илгээх":["Send","发送","보내기"],"Нэр":["Name","姓名","이름"],"Овог":["Surname","姓氏","성"],"Утас":["Phone","电话","전화"],"Имэйл":["Email","电子邮件","이메일"],"Товч тайлбар":["Brief description","简要说明","간단한 설명"],"Товч мэдээлэл":["Brief information","简要信息","간단한 정보"],"Таны нэр":["Your name","您的姓名","성함"],"Утас / и-мэйл":["Phone / email","电话 / 邮箱","전화 / 이메일"],"Үйлчилгээний төрөл":["Service type","服务类型","서비스 유형"],
    "Монгол Улс · 2008 оноос хойш":["Mongolia · Since 2008","蒙古国 · 始于2008年","몽골 · 2008년부터"],"Таны эрх ашгийг тодорхой стратегиар хамгаална.":["We protect your interests with a clear strategy.","我们以清晰策略保护您的权益。","명확한 전략으로 귀하의 이익을 보호합니다."],"Бизнес, иргэний хэрэг, үл хөдлөх хөрөнгө, өв залгамжлал болон шүүхийн маргаанд ил тод процесс, шуурхай харилцаа, бодит шийдэл санал болгоно.":["We provide transparent processes, prompt communication, and practical solutions for business, civil, real estate, inheritance, and court disputes.","我们为商业、民事、房地产、继承及诉讼争议提供透明流程、快速沟通和务实解决方案。","비즈니스, 민사, 부동산, 상속 및 소송 분쟁에 대해 투명한 절차, 신속한 소통, 실질적인 해결책을 제공합니다."],
    "Үйлчлүүлэгч төвтэй хуулийн үйлчилгээ":["Client-centered legal service","以客户为中心的法律服务","의뢰인 중심 법률 서비스"],"Итгэлтэй зөвлөх, ойлгомжтой процесс.":["Trusted counsel, clear process.","值得信赖的顾问，清晰的流程。","신뢰할 수 있는 자문, 명확한 절차."],"Хэрэг бүрт нэг загварын хариу биш, зорилго, эрсдэл, хугацаанд тань нийцсэн шийдэл боловсруулна.":["We do not use one-size-fits-all answers; we develop solutions aligned with your goals, risks, and timeline.","我们不采用千篇一律的答案，而是根据您的目标、风险和时间要求制定解决方案。","획일적인 답변이 아니라 목표, 위험, 일정에 맞춘 해결책을 설계합니다."],"жил":["years","年","년"],"хэрэг":["cases","案件","사건"],"48ц":["48h","48小时","48시간"],"хариу":["response","响应","답변"],
    "Нээлттэй харилцаа":["Open Communication","开放沟通","투명한 소통"],"Ил тод төлбөр":["Transparent Fees","透明收费","투명한 비용"],"Тогтмол мэдээлэл":["Regular Updates","定期更新","정기 보고"],"Алхам бүрийг ойлгомжтой тайлбарлаж, таны асуултад шуурхай хариулна.":["We explain every step clearly and respond to your questions promptly.","我们清楚说明每一步，并及时回答您的问题。","모든 단계를 명확히 설명하고 질문에 신속히 답합니다."],"Ажил эхлэхээс өмнө үйлчилгээний хүрээ, процесс, төлбөрийн нөхцөлийг тодорхой болгоно.":["Before starting work, we clarify the service scope, process, and fee terms.","在开始工作前，我们明确服务范围、流程和收费条件。","업무 시작 전에 서비스 범위, 절차, 비용 조건을 명확히 합니다."],"Хэрэг, хэлцэл, баримт бичгийн явцыг танд идэвхтэй мэдээлж ажиллана.":["We actively update you on the progress of cases, transactions, and documents.","我们主动向您更新案件、交易和文件的进展。","사건, 거래, 문서 진행 상황을 적극적으로 공유합니다."],
    "Хуулийн асуудлыг төвөгтэй биш, ойлгомжтой болгоно.":["We make legal matters clear, not complicated.","让法律问题变得清晰而不复杂。","법률 문제를 복잡하지 않고 명확하게 만듭니다."],"Туршлага дээр суурилсан хуулийн үйлчилгээ.":["Legal service built on experience.","基于经验的法律服务。","경험에 기반한 법률 서비스."],"Яагаад биднийг сонгох вэ?":["Why Choose Us?","为什么选择我们？","왜 저희를 선택해야 할까요?"],"Хэрэг бүрт хувийн анхаарал, мэргэжлийн стандарт.":["Personal attention and professional standards for every matter.","每一个案件都享有个别关注和专业标准。","모든 사건에 개인별 관심과 전문 기준을 적용합니다."],"Таны нөхцөлд тохирсон төлөвлөгөө":["A plan tailored to your situation","符合您情况的方案","상황에 맞춘 계획"],"Энгийн хэлээр тайлбарласан хууль":["Law explained in plain language","用通俗语言解释法律","쉬운 언어로 설명하는 법률"],"Хугацаа, зардлын ил тод байдал":["Transparency of time and cost","时间和费用透明","기간과 비용의 투명성"],"Танд ойр ажиллах туршлагатай өмгөөлөгчид.":["Experienced attorneys who work closely with you.","与您紧密合作的资深律师。","귀하와 긴밀히 협력하는 경험 많은 변호사들."],
    "Т. Гүрбадам":["T. Gurbadam","T. Gurbadam","T. Gurbadam"],"А. Ариунтуул":["A. Ariuntuul","A. Ariuntuul","A. Ariuntuul"],"Б. Тамираа":["B. Tamiraa","B. Tamiraa","B. Tamiraa"],"Үүсгэн байгуулагч, өмгөөлөгч":["Founder, Attorney","创始人、律师","창립자, 변호사"],"Өмгөөлөгч":["Attorney","律师","변호사"],"Иргэний эрх зүй · Гэрээ · Компанийн эрх зүй · Арбитр":["Civil Law · Contracts · Corporate Law · Arbitration","民法 · 合同 · 公司法 · 仲裁","민법 · 계약 · 회사법 · 중재"],"Эрүүгийн эрх зүй · Иргэний эрх зүй · Өр авлага барагдуулах":["Criminal Law · Civil Law · Debt Collection","刑法 · 民法 · 债权清收","형법 · 민법 · 채권 회수"],"Иргэний эрх зүй · Гэрээний эрх зүй · Компанийн эрх зүй · Арбитр":["Civil Law · Contract Law · Corporate Law · Arbitration","民法 · 合同法 · 公司法 · 仲裁","민법 · 계약법 · 회사법 · 중재"],
    "Таны хэрэгцээнд нийцсэн хууль зүйн үйлчилгээ.":["Legal services tailored to your needs.","符合您需求的法律服务。","귀하의 필요에 맞춘 법률 서비스."],"Байгууллага болон иргэдэд гэрээ, эрх зүйн эрсдэл, өдөр тутмын шийдвэр гаргалтад чиглэсэн зөвлөгөө өгнө.":["We advise organizations and individuals on contracts, legal risks, and day-to-day decision-making.","我们为机构和个人就合同、法律风险和日常决策提供咨询。","기관과 개인에게 계약, 법적 위험, 일상 의사결정에 대한 자문을 제공합니다."],"Иргэн, захиргаа, бизнесийн маргаанд нэхэмжлэл, хариу тайлбар, нотлох баримт, шүүх хуралдааны төлөөллийг хариуцна.":["We handle claims, responses, evidence, and court hearing representation in civil, administrative, and business disputes.","我们处理民事、行政及商业争议中的诉状、答辩、证据和庭审代理。","민사, 행정, 비즈니스 분쟁에서 청구, 답변, 증거, 법정 대리를 담당합니다."],"Хэрэг маргааны стратеги боловсруулах, эрх ашгийг хамгаалах, хуульд заасан шат бүрт өмгөөлөл үзүүлэх үйлчилгээ.":["We develop dispute strategies, protect your interests, and provide advocacy at every legal stage.","我们制定争议策略、保护权益，并在法律规定的各阶段提供律师服务。","분쟁 전략을 수립하고 이익을 보호하며 법률 절차의 모든 단계에서 변호 서비스를 제공합니다."],
    "Үйлчлүүлэгчдийн туршлага":["Client Experience","客户体验","의뢰인 경험"],"Үйлчлүүлэгчид бидэнд итгэдэг.":["Clients trust us.","客户信任我们。","의뢰인은 우리를 신뢰합니다."],"Бизнес харилцагч":["Business Client","商业客户","기업 고객"],"Иргэний хэрэг хариуцагч":["Civil Case Respondent","民事案件被告","민사 사건 피고"],"Хувь хүн":["Individual","个人","개인"],"══ МЭДЭЭ & НИЙТЛЭЛ ══":["══ NEWS & ARTICLES ══","══ 新闻与文章 ══","══ 뉴스 & 글 ══"],"Мэдээ & Нийтлэл":["News & Articles","新闻与文章","뉴스 & 글"],"Хуулийн салбарын сүүлийн мэдээ":["Latest legal sector news","法律领域最新资讯","법률 분야 최신 소식"],
    "Иргэний хууль · 2025.05.01":["Civil Law · 2025.05.01","民法 · 2025.05.01","민법 · 2025.05.01"],"Гэрлэлт цуцлахад эд хөрөнгийн хуваарилалтын шинэ журам":["New rules on property division in divorce","离婚财产分割新规则","이혼 시 재산분할 신규 규정"],"Арилжааны хууль · 2025.04.15":["Commercial Law · 2025.04.15","商法 · 2025.04.15","상법 · 2025.04.15"],"Компанийн бүртгэлийн шинэчлэлт: Юуг анхаарах вэ?":["Company registration updates: what to watch","公司登记更新：应注意什么？","회사 등록 변경: 주의할 점"],"Эрүүгийн хууль · 2025.03.28":["Criminal Law · 2025.03.28","刑法 · 2025.03.28","형법 · 2025.03.28"],"Эрүүгийн хэрэгт сэжигтнийг барьцаалах хугацааны өөрчлөлт":["Changes to detention periods for criminal suspects","刑事案件中嫌疑人羁押期限变化","형사 사건 피의자 구금 기간 변경"],
    "══ КЕЙСИЙН ЖИШЭЭ ══":["══ CASE EXAMPLES ══","══ 案例示例 ══","══ 사례 예시 ══"],"Амжилтын жишээ":["Success Examples","成功案例","성공 사례"],"Бидний шийдсэн хэрэгүүдээс":["Selected matters we have resolved","我们处理过的部分案件","저희가 해결한 사건들"],"Иргэний маргаан":["Civil Dispute","民事争议","민사 분쟁"],"Арилжааны хууль":["Commercial Law","商法","상법"],"Гэр бүлийн хууль":["Family Law","家庭法","가족법"],"Захиргааны хэрэг":["Administrative Case","行政案件","행정 사건"],"Өмчийн маргааны амжилттай шийдэл":["Successful Resolution of a Property Dispute","财产争议的成功解决","재산 분쟁의 성공적 해결"],"Өмчийн эрх зүй":["Property Law","财产权法","재산권법"],"Эвлэрэл":["Settlement","和解","합의"],"Амжилттай":["Successful","成功","성공"],"✓ Амжилттай":["✓ Successful","✓ 成功","✓ 성공"],"Гэрээний зөрчлийн нөхөн төлбөр":["Compensation for Breach of Contract","违约赔偿","계약 위반 손해배상"],"Гэрээний эрх зүй":["Contract Law","合同法","계약법"],"Арбитр":["Arbitration","仲裁","중재"],"✓ ₮120M нөхөн авсан":["✓ MNT 120M recovered","✓ 追回1.2亿图格里克","✓ 1억2천만 투그릭 회수"],"Хүүхдийн асрамжийн шийдвэр":["Child Custody Decision","子女监护裁定","자녀 양육권 결정"],"Шүүх":["Court","法院","법원"],"Татварын маргааны амжилттай шийдэл":["Successful Resolution of a Tax Dispute","税务争议的成功解决","세무 분쟁의 성공적 해결"],"Татвар":["Tax","税务","세무"],"✓ ₮85M хэмнэсэн":["✓ MNT 85M saved","✓ 节省8500万图格里克","✓ 8천5백만 투그릭 절감"],"Мэдээлэл ачаалж байна...":["Loading information...","正在加载信息...","정보를 불러오는 중..."],"← Бүх тойм мэдээ":["← All Case Reviews","← 全部案例综述","← 전체 리뷰"],"Тойм мэдээ":["Case Review","案例综述","사례 리뷰"],
    "══ ХУУЛИЙГ ЭНГИЙНЭЭР ══":["══ LAW IN PLAIN LANGUAGE ══","══ 通俗法律指南 ══","══ 쉬운 법률 ══"],"Хуулийн гарын авлага":["Legal Guide","法律指南","법률 가이드"],"Хуулийг энгийнээр ойлгоцгооё":["Let’s understand the law simply","让我们用简单方式理解法律","법을 쉽게 이해해 봅시다"],"Гэрээнд заавал байх 5 зүйл":["5 essentials in a contract","合同中必须包含的5项内容","계약서에 반드시 포함할 5가지"],"Талуудын нэр, хаяг, регистр":["Names, addresses, and registration numbers of the parties","当事人的姓名/名称、地址和登记号","당사자의 이름, 주소, 등록번호"],"Гэрээний зүйл, агуулга":["Subject and content of the contract","合同标的和内容","계약의 목적과 내용"],"Үнэ, төлбөрийн нөхцөл":["Price and payment terms","价格和付款条件","가격 및 지급 조건"],"Хугацаа, дуусгавар болох үндэслэл":["Term and grounds for termination","期限及终止依据","기간 및 종료 사유"],"Маргаан шийдвэрлэх журам":["Dispute resolution procedure","争议解决程序","분쟁 해결 절차"],"Шүүхэд гомдол гаргах алхмууд":["Steps to file a court claim","向法院提起诉讼的步骤","법원에 소를 제기하는 단계"],"Нэхэмжлэлийн бичиг бэлтгэх":["Prepare the statement of claim","准备起诉状","소장 준비"],"Улсын тэмдэгтийн хураамж төлөх":["Pay the state stamp duty","缴纳国家印花税/诉讼费","인지대 납부"],"Шүүхэд нэхэмжлэл өгөх":["Submit the claim to court","向法院提交诉状","법원에 소장 제출"],"Компани байгуулах алхмууд":["Steps to establish a company","设立公司的步骤","회사 설립 단계"],"Баривчлагдвал яах вэ?":["What to do if arrested?","被逮捕时该怎么办？","체포되면 어떻게 해야 하나요?"],"Чимээгүй байх эрхтэй — ашиглаарай":["You have the right to remain silent — use it","您有保持沉默的权利——请使用","진술거부권이 있습니다 — 활용하세요"],"Өмгөөлөгч авах эрхтэй — шаардаарай":["You have the right to an attorney — request one","您有聘请律师的权利——请提出要求","변호인을 선임할 권리가 있습니다 — 요구하세요"],"Гэр бүлдээ мэдэгдэх эрхтэй":["You have the right to notify your family","您有通知家人的权利","가족에게 알릴 권리가 있습니다"],"Эмч үзүүлэх эрхтэй":["You have the right to see a doctor","您有接受医生检查的权利","의사의 진료를 받을 권리가 있습니다"],"Яаралтай холбоо →":["Emergency contact →","紧急联系 →","긴급 연락 →"],"Өв залгамжлалын үндсэн журам":["Basic inheritance procedure","继承基本程序","상속 기본 절차"],"Арбитр vs Шүүх: Ялгаа юу вэ?":["Arbitration vs Court: What is the difference?","仲裁与法院：有什么区别？","중재와 법원: 차이는 무엇인가요?"],"Арбитр ба шүүхийн ялгаа":["Difference between arbitration and court","仲裁与法院的区别","중재와 법원의 차이"],
    "Нийтлэг асуулт":["Common Questions","常见问题","자주 묻는 질문"],"Танд байгаа асуултуудад хариулав":["Answers to common questions you may have","解答您可能关心的问题","자주 궁금해하는 질문에 답합니다"],"Асуулт илгээх →":["Send a Question →","提交问题 →","질문 보내기 →"],"Анхны зөвлөгөө үнэтэй юу?":["Is the initial consultation paid?","初次咨询收费吗？","초기 상담은 유료인가요?"],"Хэрэгт оролцоход ямар бичиг баримт бэлдэх вэ?":["What documents should I prepare for a case?","参与案件需要准备哪些文件？","사건 진행을 위해 어떤 서류를 준비해야 하나요?"],"Хэргийг шийдвэрлэхэд хэр удах вэ?":["How long does it take to resolve a case?","案件解决需要多长时间？","사건 해결에는 얼마나 걸리나요?"],"Хуулийн зөвлөгөөг онлайнаар авч болох уу?":["Can I receive legal advice online?","可以在线获得法律咨询吗？","온라인으로 법률 상담을 받을 수 있나요?"],"Манай мэдээлэл нууцлагдах уу?":["Will my information remain confidential?","我的信息会保密吗？","제 정보는 비밀로 보호되나요?"],"Яаралтай тохиолдолд хэрхэн холбогдох вэ?":["How do I contact you in an emergency?","紧急情况下如何联系？","긴급 상황에서는 어떻게 연락하나요?"],"Ярилцъя. Эхний алхмыг тодорхой болгоё.":["Let’s talk and clarify the first step.","让我们沟通，明确第一步。","상담을 통해 첫 단계를 명확히 합시다."],"Улаанбаатар хот, Сүхбаатар дүүрэг":["Ulaanbaatar, Sukhbaatar District","乌兰巴托市苏赫巴托区","울란바토르시 수흐바타르구"],"Зөвлөгөөний хүсэлт илгээх":["Send a consultation request","提交咨询请求","상담 요청 보내기"],
    "Нууцлал":["Privacy","隐私","개인정보"],"Мэдэгдэл":["Notice","声明","고지"],"Нууцлалын бодлого":["Privacy Policy","隐私政策","개인정보 처리방침"],"Вебсайт ашиглалтын мэдэгдэл":["Website Use Notice","网站使用声明","웹사이트 이용 고지"],"Сүүлд шинэчилсэн: 2026.06.20":["Last updated: 2026.06.20","最后更新：2026.06.20","최종 업데이트: 2026.06.20"],"1. Бид ямар мэдээлэл авч болох вэ?":["1. What information may we collect?","1. 我们可能收集哪些信息？","1. 어떤 정보를 수집할 수 있나요?"],"2. Мэдээллийг ямар зорилгоор ашиглах вэ?":["2. For what purposes do we use information?","2. 我们出于何种目的使用信息？","2. 정보는 어떤 목적으로 사용하나요?"],"3. Нууцлал ба хамгаалалт":["3. Confidentiality and protection","3. 保密与保护","3. 비밀유지 및 보호"],"4. Гуравдагч этгээдэд дамжуулах тухай":["4. Disclosure to third parties","4. 向第三方披露","4. 제3자 제공"],"5. Холбоо барих":["5. Contact","5. 联系","5. 연락처"],"1. Ерөнхий мэдээллийн шинж":["1. General information only","1. 一般信息性质","1. 일반 정보의 성격"],"2. Өмгөөлөгч-үйлчлүүлэгчийн харилцаа":["2. Attorney-client relationship","2. 律师与客户关系","2. 변호사-의뢰인 관계"],"3. Үр дүнгийн баталгаа өгөхгүй":["3. No guarantee of results","3. 不保证结果","3. 결과 보장 없음"],"4. Гадаад холбоос ба мэдээллийн үнэн зөв байдал":["4. External links and accuracy of information","4. 外部链接与信息准确性","4. 외부 링크 및 정보의 정확성"],"5. Зохиогчийн эрх":["5. Copyright","5. 著作权","5. 저작권"],
    "Туршлага, ёс зүй, итгэлцэл дээр суурилсан замнал.":["A journey built on experience, ethics, and trust.","建立在经验、职业伦理和信任之上的历程。","경험, 윤리, 신뢰에 기반한 여정."],"Туршлагын эхлэл":["Beginning of Experience","经验的起点","경험의 시작"],"Компанийн суурь":["Company Foundation","公司基础","회사 기반"],"Шинэ бүтэц":["New Structure","新结构","새로운 구조"],"Үйлчилгээний чиглэл":["Service Areas","服务领域","서비스 분야"],"3 үндсэн салбар":["3 core areas","3个核心领域","3대 핵심 분야"],"Он цагийн дараалал":["Timeline","时间轴","연대표"],"Ажлын зарчим":["Working Principles","工作原则","업무 원칙"],"Бодит үнэлгээ":["Realistic Assessment","客观评估","현실적 평가"],"Ойлгомжтой харилцаа":["Clear Communication","清晰沟通","명확한 소통"],"Өнөөгийн чиглэл":["Current Direction","当前方向","현재 방향"],"Бэгз Ло Консалтинг":["Begz Lo Consulting","Begz Lo Consulting","Begz Lo Consulting"],
    "Хууль зүйн зөвлөх үйлчилгээ — BEGZ Law Firm":["Legal Advisory — BEGZ Law Firm","法律顾问服务 — BEGZ律师事务所","법률 자문 서비스 — BEGZ Law Firm"],"Шүүхэд төлөөлөх үйлчилгээ — BEGZ Law Firm":["Court Representation — BEGZ Law Firm","诉讼代理服务 — BEGZ律师事务所","법원 대리 서비스 — BEGZ Law Firm"],"Өмгөөллийн үйлчилгээ — BEGZ Law Firm":["Advocacy Service — BEGZ Law Firm","律师辩护服务 — BEGZ律师事务所","변호 서비스 — BEGZ Law Firm"],"Бусад үйлчилгээ":["Other Services","其他服务","기타 서비스"],"Товч, хэрэгжихүйц, эрсдэл бууруулсан зөвлөмж.":["Concise, actionable, risk-reducing advice.","简明、可执行、降低风险的建议。","간결하고 실행 가능하며 위험을 줄이는 조언."],"Юуг хамардаг вэ?":["What does it cover?","涵盖哪些内容？","무엇을 포함하나요?"],"Гэрээ, баримт бичиг":["Contracts and documents","合同与文件","계약 및 문서"],"Эрсдэлийн зөвлөмж":["Risk advice","风险建议","위험 자문"],"Тогтмол зөвлөх":["Ongoing counsel","持续顾问","상시 자문"],"Нөхцөл байдлыг сонсоно":["We listen to the situation","了解情况","상황을 듣습니다"],"Зөвлөмж боловсруулна":["We develop recommendations","制定建议","권고안을 작성합니다"],"Баримт бичиг, дараагийн алхмыг бэлтгэнэ":["We prepare documents and next steps","准备文件和下一步","문서와 다음 단계를 준비합니다"],"Баримтад тулгуурласан, хугацаа мөрдсөн төлөөлөл.":["Evidence-based representation that respects deadlines.","以证据为基础、遵守期限的代理。","증거 기반, 기한 준수 대리."],"Нэхэмжлэл, хариу тайлбар":["Claims and responses","诉状与答辩","청구 및 답변"],"Шүүх хуралдаан":["Court hearing","庭审","재판"],"Эрсдэлийн удирдлага":["Risk management","风险管理","위험 관리"],"Ажлын дараалал":["Work sequence","工作流程","업무 절차"],"Хэргийн материалтай танилцана":["We review the case materials","审阅案件材料","사건 자료를 검토합니다"],"Шүүхийн стратеги гаргана":["We develop a litigation strategy","制定诉讼策略","소송 전략을 수립합니다"],"Шат бүрт төлөөлнө":["We represent you at every stage","在每个阶段代理您","모든 단계에서 대리합니다"],"Нууцлал, стратеги, тууштай хамгаалалт.":["Confidentiality, strategy, and steadfast protection.","保密、策略和坚定保护。","비밀유지, 전략, 일관된 보호."],"Эрх ашгийн хамгаалалт":["Protection of interests","权益保护","이익 보호"],"Процессын баримт бичиг":["Procedural documents","程序文件","절차 문서"],"Эхний үнэлгээ":["Initial assessment","初步评估","초기 평가"],"Өмгөөллийн стратеги":["Advocacy strategy","辩护策略","변호 전략"],"Шат бүрт хамт байна":["We stay with you at every stage","每个阶段与您同行","모든 단계에서 함께합니다"],
    "BEGZ AI туслах":["BEGZ AI Assistant","BEGZ AI助手","BEGZ AI 도우미"],"Ерөнхий мэдээлэл, чиглүүлэг өгнө":["Provides general information and guidance","提供一般信息和引导","일반 정보와 안내 제공"],"Чат хаах":["Close chat","关闭聊天","채팅 닫기"],"Асуултаа бичнэ үү":["Type your question","请输入您的问题","질문을 입력하세요"],"Энэ нь ерөнхий мэдээлэл бөгөөд хууль зүйн зөвлөгөө биш.":["This is general information and not legal advice.","本内容为一般信息，并非法律意见。","이는 일반 정보이며 법률 자문이 아닙니다."],"Чат нээх":["Open chat","打开聊天","채팅 열기"],"AI холболт идэвхтэй":["AI connection active","AI连接已启用","AI 연결 활성화"],"Зөвлөх үйлчилгээ":["Advisory Service","顾问服务","자문 서비스"],"Шүүхэд төлөөлөх":["Court Representation","诉讼代理","법원 대리"],"Өмгөөлөл":["Advocacy","辩护","변호"],"Нууцлалтай холбоотой асуулт, мэдээлэл засуулах эсвэл устгуулах хүсэлт байвал бидэнтэй холбоо барих хэсгээр дамжуулан холбогдоно уу.":["For privacy-related questions or requests to correct or delete information, please contact us through the contact section.","如有隐私相关问题或要求更正、删除信息，请通过联系我们部分与我们联系。","개인정보 관련 질문, 정보 수정 또는 삭제 요청은 연락처 섹션을 통해 문의하세요."],"© 2026 Бүх эрх хуулиар хамгаалагдсан.":["© 2026 All rights reserved.","© 2026 保留所有权利。","© 2026 모든 권리 보유."],"© 2026 \"Бэгз Ло Консалтинг\" ХХК. Бүх эрх хуулиар хамгаалагдсан.":["© 2026 \"Begz Lo Consulting\" LLC. All rights reserved.","© 2026 “Begz Lo Consulting”有限责任公司。保留所有权利。","© 2026 \"Begz Lo Consulting\" LLC. 모든 권리 보유."]
  };
  const PH={
    en:[["Хууль зүйн","Legal"],["хуулийн","legal"],["Хуулийн","Legal"],["үйлчилгээ","service"],["зөвлөгөө","advice"],["зөвлөх","advisory"],["шүүх","court"],["Шүүх","Court"],["өмгөөлөл","advocacy"],["Өмгөөлөл","Advocacy"],["өмгөөлөгч","attorney"],["үйлчлүүлэгч","client"],["маргаан","dispute"],["хэрэг","case"],["гэрээ","contract"],["баримт бичиг","documents"],["нотлох баримт","evidence"],["эрсдэл","risk"],["хугацаа","timeframe"],["зардал","cost"],["эрх ашиг","interests"],["нууцлал","confidentiality"],["компани","company"],["байгууллага","organization"],["иргэн","individual"],["бизнес","business"],["үл хөдлөх хөрөнгө","real estate"],["өв залгамжлал","inheritance"],["гэр бүл","family"],["татвар","tax"],["захиргааны","administrative"],["иргэний","civil"],["эрүүгийн","criminal"],["арбитр","arbitration"],["шийдвэр","decision"],["тойм мэдээ","case review"],["анхны","initial"],["үнэгүй","free"],["төлбөр","fee"],["мэдээлэл","information"],["холбоо барих","contact"]],
    zh:[["Хууль зүйн","法律"],["хуулийн","法律"],["Хуулийн","法律"],["үйлчилгээ","服务"],["зөвлөгөө","咨询"],["зөвлөх","顾问"],["шүүх","法院"],["Шүүх","法院"],["өмгөөлөл","律师服务"],["Өмгөөлөл","辩护"],["өмгөөлөгч","律师"],["үйлчлүүлэгч","客户"],["маргаан","争议"],["хэрэг","案件"],["гэрээ","合同"],["баримт бичиг","文件"],["нотлох баримт","证据"],["эрсдэл","风险"],["хугацаа","期限"],["зардал","费用"],["эрх ашиг","权益"],["нууцлал","保密"],["компани","公司"],["байгууллага","机构"],["иргэн","个人"],["бизнес","商业"],["үл хөдлөх хөрөнгө","房地产"],["өв залгамжлал","继承"],["гэр бүл","家庭"],["татвар","税务"],["захиргааны","行政"],["иргэний","民事"],["эрүүгийн","刑事"],["арбитр","仲裁"],["шийдвэр","判决"],["тойм мэдээ","案例综述"],["анхны","初次"],["үнэгүй","免费"],["төлбөр","费用"],["мэдээлэл","信息"],["холбоо барих","联系"]],
    ko:[["Хууль зүйн","법률"],["хуулийн","법률"],["Хуулийн","법률"],["үйлчилгээ","서비스"],["зөвлөгөө","상담"],["зөвлөх","자문"],["шүүх","법원"],["Шүүх","법원"],["өмгөөлөл","변호"],["Өмгөөлөл","변호"],["өмгөөлөгч","변호사"],["үйлчлүүлэгч","의뢰인"],["маргаан","분쟁"],["хэрэг","사건"],["гэрээ","계약"],["баримт бичиг","문서"],["нотлох баримт","증거"],["эрсдэл","위험"],["хугацаа","기간"],["зардал","비용"],["эрх ашиг","이익"],["нууцлал","비밀유지"],["компани","회사"],["байгууллага","기관"],["иргэн","개인"],["бизнес","비즈니스"],["үл хөдлөх хөрөнгө","부동산"],["өв залгамжлал","상속"],["гэр бүл","가족"],["татвар","세무"],["захиргааны","행정"],["иргэний","민사"],["эрүүгийн","형사"],["арбитр","중재"],["шийдвэр","결정"],["тойм мэдээ","사례 리뷰"],["анхны","초기"],["үнэгүй","무료"],["төлбөр","비용"],["мэдээлэл","정보"],["холбоо барих","연락"]]
  };

  // Supplemental complete translations added after QA review.
  Object.assign(D, {
  "Дэлгэрэнгүй унших →": [
    "Read more →",
    "阅读更多 →",
    "자세히 보기 →"
  ],
  "Асуулт илгээх →": [
    "Send a question →",
    "提交问题 →",
    "질문 보내기 →"
  ],
  "Яаралтай холбоо →": [
    "Urgent contact →",
    "紧急联系 →",
    "긴급 연락 →"
  ],
  "Холбоо барих хэсэг": [
    "Contact section",
    "联系我们部分",
    "연락처 섹션"
  ],
  "Үйлчилгээ үзэх": [
    "View services",
    "查看服务",
    "서비스 보기"
  ],
  "FAQ хэсэг рүү очих": [
    "Go to FAQ",
    "前往常见问题",
    "FAQ로 이동"
  ],
  "Нийтлэг асуулт": [
    "Common Questions",
    "常见问题",
    "자주 묻는 질문"
  ],
  "Танд байгаа асуултуудад хариулав": [
    "Answers to common questions",
    "解答您可能有的问题",
    "자주 묻는 질문에 답변드립니다"
  ],
  "Хариултыг олохгүй байвал бидэнтэй холбогдоорой. Анхны зөвлөгөө үнэгүй.": [
    "If you cannot find the answer, please contact us. The initial consultation is free.",
    "如果找不到答案，请联系我们。初次咨询免费。",
    "답변을 찾지 못하시면 문의해 주세요. 첫 상담은 무료입니다."
  ],
  "Зөвлөгөөний хүсэлт илгээх": [
    "Send a consultation request",
    "提交咨询请求",
    "상담 요청 보내기"
  ],
  "Ярилцъя. Эхний алхмыг тодорхой болгоё.": [
    "Let’s talk and clarify the first step.",
    "让我们沟通并明确第一步。",
    "상담을 통해 첫 단계를 명확히 하겠습니다."
  ],
  "Улаанбаатар хот, Сүхбаатар дүүрэг": [
    "Ulaanbaatar, Sukhbaatar District",
    "乌兰巴托市，苏赫巴托尔区",
    "울란바토르시 수흐바타르구"
  ],
  "Улаанбаатар": [
    "Ulaanbaatar",
    "乌兰巴托",
    "울란바토르"
  ],
  "Онлайн зөвлөгөө": [
    "Online consultation",
    "在线咨询",
    "온라인 상담"
  ],
  "Анхны зөвлөгөө авах": [
    "Get an initial consultation",
    "获取初次咨询",
    "초기 상담 받기"
  ],
  "Яагаад Бэгз": [
    "Why BEGZ",
    "为什么选择BEGZ",
    "왜 BEGZ인가"
  ],
  "Бэгз": [
    "BEGZ",
    "BEGZ",
    "BEGZ"
  ],
  "Бэгз Law Firm": [
    "BEGZ Law Firm",
    "BEGZ律师事务所",
    "BEGZ 법률사무소"
  ],
  "Бэгз Ло Консалтинг": [
    "Begz Lo Consulting",
    "Begz Lo Consulting有限责任公司",
    "Begz Lo Consulting LLC"
  ],
  "Мэдэгдэл": [
    "Notice",
    "声明",
    "고지"
  ],
  "Нууцлал": [
    "Privacy",
    "隐私",
    "개인정보"
  ],
  "Хайлт": [
    "Search",
    "搜索",
    "검색"
  ],
  "Хайлт...": [
    "Search...",
    "搜索...",
    "검색..."
  ],
  "Илэрц олдсонгүй.": [
    "No results found.",
    "未找到结果。",
    "검색 결과가 없습니다."
  ],
  "Мэдээлэл ачаалахад алдаа гарлаа.": [
    "Failed to load information.",
    "信息加载失败。",
    "정보를 불러오지 못했습니다."
  ],
  "Сүүлд шинэчилсэн: 2026.06.20": [
    "Last updated: 2026.06.20",
    "最后更新：2026.06.20",
    "최종 업데이트: 2026.06.20"
  ],
  "4 сар": [
    "4 months",
    "4个月",
    "4개월"
  ],
  "5 сар": [
    "5 months",
    "5个月",
    "5개월"
  ],
  "6 сар": [
    "6 months",
    "6个月",
    "6개월"
  ],
  "7 сар": [
    "7 months",
    "7个月",
    "7개월"
  ],
  "Хугацаа: 4 сар": [
    "Duration: 4 months",
    "期限：4个月",
    "기간: 4개월"
  ],
  "Хугацаа: 5 сар": [
    "Duration: 5 months",
    "期限：5个月",
    "기간: 5개월"
  ],
  "Хугацаа: 6 сар": [
    "Duration: 6 months",
    "期限：6个月",
    "기간: 6개월"
  ],
  "Хугацаа: 7 сар": [
    "Duration: 7 months",
    "期限：7个月",
    "기간: 7개월"
  ],
  "Шийдвэрлэсэн: 2024": [
    "Resolved: 2024",
    "已解决：2024",
    "해결: 2024"
  ],
  "Шийдвэрлэсэн: 2025": [
    "Resolved: 2025",
    "已解决：2025",
    "해결: 2025"
  ],
  "BEGZ LAW FIRM нь хувь хүн, гэр бүл, бизнесийн байгууллагад зориулсан стратегийн хууль зүйн үйлчилгээ үзүүлдэг. Бид хэрэг, гэрээ, маргаан бүрийг зөвхөн хууль талаас нь бус, таны зорилго, хугацаа, санхүүгийн эрсдэлтэй нь хамт харж шийдэл боловсруулдаг.": [
    "BEGZ LAW FIRM provides strategic legal services for individuals, families, and businesses. We assess each case, contract, and dispute not only from the legal angle, but also in light of your goals, timeline, and financial risks.",
    "BEGZ律师事务所为个人、家庭和企业提供战略性法律服务。我们处理每一项案件、合同和争议时，不仅从法律角度出发，也会结合您的目标、时间安排和财务风险制定解决方案。",
    "BEGZ LAW FIRM은 개인, 가족 및 기업을 위한 전략적 법률 서비스를 제공합니다. 사건, 계약, 분쟁을 단순한 법률 문제로만 보지 않고 귀하의 목표, 일정, 재정적 위험까지 함께 고려해 해결책을 마련합니다."
  ],
  "Манай ажлын зарчим энгийн: сонсоно, тайлбарлана, төлөвлөнө, тогтмол мэдээлнэ. Тиймээс та дараагийн алхам бүрийг мэдэж, шийдвэрээ итгэлтэй гаргана.": [
    "Our working principle is simple: listen, explain, plan, and keep you informed. This helps you understand every next step and make decisions with confidence.",
    "我们的工作原则很简单：倾听、解释、规划并持续沟通。因此，您可以清楚了解每一步并自信作出决定。",
    "저희의 업무 원칙은 간단합니다. 듣고, 설명하고, 계획하고, 지속적으로 공유합니다. 이를 통해 다음 단계를 명확히 알고 자신 있게 결정할 수 있습니다."
  ],
  "BEGZ LAW FIRM нь 2008 оноос хойш иргэн, гэр бүл, бизнесийн байгууллагад хууль зүйн зөвлөх, өмгөөлөл, шүүхэд төлөөлөх үйлчилгээ үзүүлж ирсэн.": [
    "Since 2008, BEGZ LAW FIRM has provided legal advisory, advocacy, and court representation services to individuals, families, and businesses.",
    "自2008年以来，BEGZ律师事务所一直为个人、家庭和企业提供法律顾问、律师服务和诉讼代理服务。",
    "BEGZ LAW FIRM은 2008년부터 개인, 가족 및 기업을 대상으로 법률 자문, 변호 및 법원 대리 서비스를 제공해 왔습니다."
  ],
  "Бидний ажлын арга барил олон жилийн туршлага, нууцлал, мэргэжлийн ёс зүй, үйлчлүүлэгчид ойлгомжтой тайлбар өгөх зарчим дээр тулгуурладаг.": [
    "Our work is built on years of experience, confidentiality, professional ethics, and the principle of explaining matters clearly to clients.",
    "我们的工作方式建立在多年经验、保密原则、职业伦理以及向客户清晰说明问题的基础之上。",
    "저희의 업무 방식은 다년간의 경험, 비밀유지, 전문 윤리, 의뢰인에게 명확하게 설명하는 원칙에 기반합니다."
  ],
  "Томоохон маргаан, нарийн гэрээ, гэр бүлийн эмзэг асуудал аль нь ч байсан бид таны нөхцөлд тохирсон бодит стратеги гаргана.": [
    "Whether it is a major dispute, a complex contract, or a sensitive family matter, we develop a practical strategy tailored to your situation.",
    "无论是重大争议、复杂合同，还是敏感的家庭问题，我们都会根据您的具体情况制定切实可行的策略。",
    "대형 분쟁, 복잡한 계약, 민감한 가족 문제 등 어떤 사안이든 귀하의 상황에 맞는 실질적 전략을 수립합니다."
  ],
  "Хэрэг бүрийг тухайн чиглэлээр туршлагатай хуульч хариуцаж, танд ойлгомжтой төлөвлөгөө өгч ажиллана.": [
    "Each matter is handled by a lawyer experienced in the relevant field, with a clear plan provided to you.",
    "每项事务均由相关领域经验丰富的律师负责，并向您提供清晰的工作计划。",
    "각 사건은 해당 분야의 경험 있는 변호사가 담당하며, 이해하기 쉬운 계획을 제공합니다."
  ],
  "Итгэл нь зөвхөн үр дүнгээс биш, харилцаа, ойлгомжтой тайлбар, тогтмол мэдээллээс бий болдог.": [
    "Trust is built not only on results, but also on communication, clear explanations, and regular updates.",
    "信任不仅来自结果，也来自沟通、清晰说明和持续更新。",
    "신뢰는 결과뿐 아니라 소통, 명확한 설명, 정기적인 정보 공유에서 형성됩니다."
  ],
  "\"Манай компанийн гэрээ, маргааны асуудлыг маш ойлгомжтой тайлбарлаж, богино хугацаанд шийдвэрлэсэн.\"": [
    "\"They explained our company’s contract and dispute matters very clearly and resolved them quickly.\"",
    "“他们非常清楚地解释了我们公司的合同和争议问题，并在短时间内解决了问题。”",
    "“회사 계약 및 분쟁 문제를 매우 이해하기 쉽게 설명하고 짧은 시간 안에 해결했습니다.”"
  ],
  "\"Процесс бүр тодорхой байсан. Ямар бичиг баримт хэрэгтэй, дараагийн алхам юу болохыг үргэлж хэлж өгдөг.\"": [
    "\"Every process was clear. They always told us what documents were needed and what the next step would be.\"",
    "“每个流程都很清楚。他们总是说明需要哪些文件以及下一步是什么。”",
    "“모든 절차가 명확했습니다. 어떤 서류가 필요한지, 다음 단계가 무엇인지 항상 알려주었습니다.”"
  ],
  "\"Хуулийн хэллэгийг энгийнээр тайлбарлаж, шийдвэр гаргахад маш их тус болсон.\"": [
    "\"They explained legal language simply and helped greatly with decision-making.\"",
    "“他们用通俗语言解释法律术语，对我们作出决定很有帮助。”",
    "“법률 용어를 쉽게 설명해 주어 의사결정에 큰 도움이 되었습니다.”"
  ],
  "Монгол Улсын Гэр бүлийн хуульд орсон өөрчлөлт нь эд хөрөнгийн хуваарилалтад шинэ зохицуулалт авчирлаа.": [
    "Amendments to Mongolia’s Family Law introduced new rules on property division.",
    "蒙古国家庭法的修订为财产分割带来了新的规定。",
    "몽골 가족법 개정으로 재산분할에 새로운 규정이 도입되었습니다."
  ],
  "2025 оноос эхлэн компанийн улсын бүртгэлд шаардагдах баримт бичгийн жагсаалт өргөжлөө.": [
    "Starting in 2025, the list of documents required for company state registration has expanded.",
    "自2025年起，公司国家登记所需文件清单有所扩大。",
    "2025년부터 회사 국가등록에 필요한 서류 목록이 확대되었습니다."
  ],
  "Шүүхийн практикт гарсан чухал өөрчлөлт — сэжигтнийг хорих хугацааны дээд хязгаар шинэчлэгдлээ.": [
    "An important change in court practice: the maximum detention period for suspects has been updated.",
    "司法实践出现重要变化：嫌疑人羁押期限上限已更新。",
    "법원 실무의 중요한 변화로 피의자 구금 기간의 상한이 변경되었습니다."
  ],
  "Үйлчлүүлэгчийн нэр, хувийн мэдээллийг нууцалсан боловч хуулийн ажлын явцыг дэлгэрэнгүй харуулав.": [
    "Client names and personal information are kept confidential while the legal work process is shown in detail.",
    "客户姓名和个人信息均予以保密，同时展示法律工作的处理过程。",
    "의뢰인의 이름과 개인정보는 비밀로 유지하면서 법률 업무의 진행 과정을 설명합니다."
  ],
  "Нарийн хуулийн нэр томьёог энгийн хэлээр тайлбарлав. Мэдлэгтэй байх нь таны хамгийн сайн хамгаалалт.": [
    "Complex legal terms are explained in plain language. Being informed is your best protection.",
    "我们用通俗语言解释复杂法律术语。了解信息就是最好的保护。",
    "복잡한 법률 용어를 쉬운 언어로 설명합니다. 알고 있는 것이 가장 좋은 보호입니다."
  ],
  "Энэ формоор илгээсэн мэдээлэл нь өмгөөлөгч-үйлчлүүлэгчийн харилцаа үүсгэхгүй. Бид тантай холбогдож дараагийн алхмыг баталгаажуулна.": [
    "Information sent through this form does not create an attorney-client relationship. We will contact you to confirm the next steps.",
    "通过本表单提交的信息不会形成律师—客户关系。我们将与您联系以确认下一步。",
    "이 양식을 통해 제출된 정보는 변호사-의뢰인 관계를 형성하지 않습니다. 다음 단계를 확인하기 위해 연락드리겠습니다."
  ],
  "Хуулийн фирмийн Үүсгэн байгуулагч. Хууль зүйн ухааны магистр, докторант. Ажлын туршлага: 15 жил. Тендер, өмчийн эрх зүй, газрын эрх зүй, барилгын болон байгаль орчны эрх зүйн чиглэлээр мэргэшсэн.": [
    "Founder of the law firm. Master of Laws and doctoral candidate. Work experience: 15 years. Specialized in tender, property, land, construction, and environmental law.",
    "律师事务所创始人。法学硕士、博士研究生。工作经验：15年。专长于招投标、财产权、土地、建筑及环境法律领域。",
    "법률사무소 창립자. 법학 석사, 박사과정. 경력 15년. 입찰, 재산권, 토지, 건설 및 환경법 분야 전문."
  ],
  "Хуулийн фирмийн үүсгэн байгуулагч. Хууль зүйн ухааны магистр, докторант. Ажлын туршлага: 15 жил. Тендер, өмчийн эрх зүй, газрын эрх зүй, барилгын болон байгаль орчны эрх зүйн чиглэлээр мэргэшсэн.": [
    "Founder of the law firm. Master of Laws and doctoral candidate. Work experience: 15 years. Specialized in tender, property, land, construction, and environmental law.",
    "律师事务所创始人。法学硕士、博士研究生。工作经验：15年。专长于招投标、财产权、土地、建筑及环境法律领域。",
    "법률사무소 창립자. 법학 석사, 박사과정. 경력 15년. 입찰, 재산권, 토지, 건설 및 환경법 분야 전문."
  ],
  "Хуулийн фирмийн Гүйцэтгэх захирал. Хууль зүйн ухааны магистр, докторант. Ажлын туршлага: 20 жил. Гэрээний эрх зүй, компанийн эрх зүй, өмчийн болон газрын эрх зүйн чиглэлээр мэргэшсэн.": [
    "Executive Director of the law firm. Master of Laws and doctoral candidate. Work experience: 20 years. Specialized in contract law, corporate law, property law, and land law.",
    "律师事务所执行董事。法学硕士、博士研究生。工作经验：20年。专长于合同法、公司法、财产及土地法律领域。",
    "법률사무소 대표. 법학 석사, 박사과정. 경력 20년. 계약법, 회사법, 재산 및 토지법 분야 전문."
  ],
  "Хуулийн фирмийн гүйцэтгэх захирал. Хууль зүйн ухааны магистр, докторант. Ажлын туршлага: 20 жил. Гэрээний эрх зүй, компанийн эрх зүй, өмчийн болон газрын эрх зүйн чиглэлээр мэргэшсэн.": [
    "Executive Director of the law firm. Master of Laws and doctoral candidate. Work experience: 20 years. Specialized in contract law, corporate law, property law, and land law.",
    "律师事务所执行董事。法学硕士、博士研究生。工作经验：20年。专长于合同法、公司法、财产及土地法律领域。",
    "법률사무소 대표. 법학 석사, 박사과정. 경력 20년. 계약법, 회사법, 재산 및 토지법 분야 전문."
  ],
  "Хуулийн фирмийн хуульч, өмгөөлөгч. Ажлын туршлага: 5 жил. Иргэний болон гэрээний эрх зүй, компанийн эрх зүй, арбитрын чиглэлээр мэргэшсэн.": [
    "Lawyer and attorney at the firm. Work experience: 5 years. Specialized in civil and contract law, corporate law, and arbitration.",
    "本所律师。工作经验：5年。专长于民事及合同法、公司法和仲裁。",
    "법률사무소 소속 변호사. 경력 5년. 민사 및 계약법, 회사법, 중재 분야 전문."
  ],
  "Үйлчлүүлэгч нь ах дүүтэйгээ хамтарч өвлөн авсан орон сууцны хуваарилалтын маргаанд орсон. Бид 6 сарын хугацаанд шүүхийн гадна эвлэрэл хийж, хоёр талд тааламжтай шийдэлд хүрлээ.": [
    "The client was involved in a dispute over the division of an apartment inherited jointly with siblings. Within 6 months, we reached an out-of-court settlement acceptable to both sides.",
    "客户与兄弟姐妹共同继承的住宅分割发生争议。我们在6个月内促成庭外和解，使双方达成满意解决方案。",
    "의뢰인은 형제자매와 공동 상속한 아파트 분할 문제로 분쟁에 처했습니다. 저희는 6개월 내 법원 밖 합의를 통해 양측이 수용할 수 있는 해결에 도달했습니다."
  ],
  "Нийлүүлэлтийн гэрээний зөрчлөөс болж 120 сая төгрөгийн хохирол амссан компанийн хэргийг хариуцаж, арбитрын шийдвэрээр бүрэн нөхөн төлбөр гаргуулсан.": [
    "We handled a company’s case involving MNT 120 million in losses caused by breach of a supply contract and obtained full compensation through an arbitral award.",
    "我们代理了一家公司因供应合同违约遭受1.2亿图格里克损失的案件，并通过仲裁裁决获得全额赔偿。",
    "공급계약 위반으로 1억2천만 투그릭의 손해를 입은 회사 사건을 담당하여 중재 판정으로 전액 배상을 받았습니다."
  ],
  "Нийлүүлэлтийн гэрээний зөрчлөөс болж ₮120 сая төгрөгийн хохирол амссан компанийн хэргийг хариуцаж, арбитрын шийдвэрээр бүрэн нөхөн төлбөр гаргуулсан.": [
    "We handled a company’s case involving MNT 120 million in losses caused by breach of a supply contract and obtained full compensation through an arbitral award.",
    "我们代理了一家公司因供应合同违约遭受1.2亿图格里克损失的案件，并通过仲裁裁决获得全额赔偿。",
    "공급계약 위반으로 1억2천만 투그릭의 손해를 입은 회사 사건을 담당하여 중재 판정으로 전액 배상을 받았습니다."
  ],
  "Гадаадад ажилладаг эцэгтэй гэрлэлт цуцалсан эхийн хүүхэд асрах эрхийн хэргийг амжилттай шийдвэрлэж, тэтгэлгийн хэмжээг шүүхээр тогтоолгосон.": [
    "We successfully resolved a child custody matter for a mother divorced from a father working abroad and had child support determined by the court.",
    "我们成功处理了一名与在国外工作的父亲离婚的母亲的子女监护案件，并由法院确定抚养费金额。",
    "해외에서 일하는 부친과 이혼한 모친의 자녀 양육권 사건을 성공적으로 해결하고 법원을 통해 양육비 금액을 확정했습니다."
  ],
  "Татварын байгууллагаас буруу тооцоолсон 85 сая төгрөгийн нэмэлт татварын шийдвэрт гомдол гарган, захиргааны шүүхээр хүчингүй болгуулсан.": [
    "We challenged an additional tax assessment of MNT 85 million incorrectly calculated by the tax authority and had it annulled by the administrative court.",
    "我们对税务机关错误计算的8500万图格里克追加税决定提出异议，并通过行政法院撤销了该决定。",
    "세무기관이 잘못 산정한 8천5백만 투그릭의 추가 세금 부과 결정에 대해 이의를 제기하여 행정법원에서 취소시켰습니다."
  ],
  "Татварын байгууллагаас буруу тооцоолсон ₮85 сая төгрөгийн нэмэлт татварын шийдвэрт гомдол гарган, захиргааны шүүхээр хүчингүй болгуулсан.": [
    "We challenged an additional tax assessment of MNT 85 million incorrectly calculated by the tax authority and had it annulled by the administrative court.",
    "我们对税务机关错误计算的8500万图格里克追加税决定提出异议，并通过行政法院撤销了该决定。",
    "세무기관이 잘못 산정한 8천5백만 투그릭의 추가 세금 부과 결정에 대해 이의를 제기하여 행정법원에서 취소시켰습니다."
  ],
  "120M нөхөн авсан": [
    "MNT 120M recovered",
    "追回1.2亿图格里克",
    "1억2천만 투그릭 회수"
  ],
  "85M хэмнэсэн": [
    "MNT 85M saved",
    "节省8500万图格里克",
    "8천5백만 투그릭 절감"
  ],
  "✓ 120M нөхөн авсан": [
    "✓ MNT 120M recovered",
    "✓ 追回1.2亿图格里克",
    "✓ 1억2천만 투그릭 회수"
  ],
  "✓ 85M хэмнэсэн": [
    "✓ MNT 85M saved",
    "✓ 节省8500万图格里克",
    "✓ 8천5백만 투그릭 절감"
  ],
  "Нөхцөл байдал": [
    "Situation",
    "背景情况",
    "상황"
  ],
  "Бидний хийсэн ажил": [
    "What We Did",
    "我们的工作",
    "저희가 수행한 업무"
  ],
  "Үр дүн": [
    "Result",
    "结果",
    "결과"
  ],
  "Нууцлалын тэмдэглэл": [
    "Confidentiality Note",
    "保密说明",
    "비밀유지 안내"
  ],
  "Үйлчлүүлэгчийн нэр, хувийн мэдээлэл, хэрэгт хамаарах нууц баримтыг нийтлээгүй. Энэхүү тойм нь ерөнхий мэдээллийн зориулалттай.": [
    "Client names, personal information, and confidential case documents are not disclosed. This review is provided for general informational purposes.",
    "客户姓名、个人信息及案件相关保密文件均未公开。本案例综述仅供一般信息参考。",
    "의뢰인의 이름, 개인정보 및 사건 관련 비밀 문서는 공개하지 않았습니다. 본 리뷰는 일반 정보 제공을 목적으로 합니다."
  ],
  "Бусад тойм мэдээ": [
    "Other Case Reviews",
    "其他案例综述",
    "기타 사례 리뷰"
  ],
  "Өв залгамжлалын дараа хамтран өмчлөх эрх, хөрөнгийн бодит ашиглалт, талуудын хоорондын харилцаа зэрэг олон хүчин зүйл давхар нөлөөлсөн маргаан байсан. Үйлчлүүлэгч шүүхийн ажиллагаа эхлүүлэхээс өмнө өөрийн эрх, нотлох баримт, эвлэрлийн боломжийг бодитоор үнэлүүлэх шаардлагатай болсон.": [
    "The dispute involved multiple factors, including co-ownership rights after inheritance, actual use of the property, and relations between the parties. Before initiating court proceedings, the client needed a realistic assessment of rights, evidence, and settlement options.",
    "该争议涉及继承后的共有权、财产实际使用情况以及当事人之间关系等多重因素。在启动诉讼前，客户需要对自身权利、证据和和解可能性进行实际评估。",
    "상속 이후 공동소유권, 재산의 실제 사용, 당사자 간 관계 등 여러 요소가 얽힌 분쟁이었습니다. 의뢰인은 소송을 시작하기 전에 자신의 권리, 증거 및 합의 가능성을 현실적으로 평가받을 필요가 있었습니다."
  ],
  "Өмчлөх эрх, өв залгамжлалын баримт бичиг, хөрөнгийн үнэлгээ болон талуудын байр суурийг нэгтгэн дүгнэсэн.": [
    "We reviewed and consolidated ownership rights, inheritance documents, property valuation, and the positions of the parties.",
    "我们综合审查了所有权、继承文件、财产评估以及各方立场。",
    "소유권, 상속 문서, 재산 평가 및 당사자들의 입장을 종합적으로 검토했습니다."
  ],
  "Шүүхийн маргаан үргэлжилсэн тохиолдолд гарах хугацаа, зардал, нотлох баримтын эрсдэлийг үйлчлүүлэгчид ойлгомжтой тайлбарласан.": [
    "We clearly explained the time, cost, and evidentiary risks that could arise if litigation continued.",
    "我们清楚说明了诉讼继续进行时可能产生的时间、费用和证据风险。",
    "소송이 계속될 경우 발생할 수 있는 기간, 비용 및 증거상 위험을 의뢰인에게 명확히 설명했습니다."
  ],
  "Эвлэрлийн саналын бүтэц боловсруулж, хоёр талын ашиг сонирхлыг тэнцвэржүүлэх хэлэлцээрийн байр суурь бэлдсэн.": [
    "We structured a settlement proposal and prepared a negotiation position balancing the interests of both parties.",
    "我们设计了和解方案结构，并准备了兼顾双方利益的谈判立场。",
    "합의 제안의 구조를 마련하고 양측의 이해관계를 균형 있게 반영한 협상 입장을 준비했습니다."
  ],
  "Талууд шүүхийн гадна эвлэрч, үл хөдлөх хөрөнгийн хуваарилалт болон нөхөн төлбөрийн нөхцөлийг бичгээр баталгаажуулсан.": [
    "The parties settled out of court and confirmed the property division and compensation terms in writing.",
    "双方达成庭外和解，并以书面形式确认了不动产分配和补偿条件。",
    "당사자들은 법원 밖에서 합의했고 부동산 분할 및 보상 조건을 서면으로 확정했습니다."
  ],
  "Нийлүүлэлтийн гэрээний хугацаа, чанарын шаардлага, төлбөрийн нөхцөл зөрчигдсөнөөс компанийн үйл ажиллагаанд бодит хохирол учирсан. Маргааныг гэрээний арбитрын заалтын дагуу шийдвэрлүүлэх шаардлагатай болсон.": [
    "The supplier breached delivery deadlines, quality requirements, and payment terms, causing real losses to the company’s operations. The dispute had to be resolved under the arbitration clause in the contract.",
    "供应合同的期限、质量要求和付款条件被违反，给公司经营造成实际损失。根据合同中的仲裁条款，该争议需要通过仲裁解决。",
    "공급계약의 기한, 품질 요건 및 지급 조건 위반으로 회사 운영에 실제 손해가 발생했습니다. 분쟁은 계약상 중재 조항에 따라 해결되어야 했습니다."
  ],
  "Гэрээний үүрэг, зөрчлийн баримт, санхүүгийн хохирлын тооцооллыг нотлох баримтаар бэхжүүлсэн.": [
    "We supported the contractual obligations, breach facts, and financial loss calculations with evidence.",
    "我们以证据支持合同义务、违约事实和财务损失计算。",
    "계약상 의무, 위반 사실, 재무 손해 산정을 증거로 뒷받침했습니다."
  ],
  "Арбитрын нэхэмжлэл, тайлбар, нотлох баримтын багцыг үе шаттай боловсруулсан.": [
    "We prepared the arbitration claim, submissions, and evidence package step by step.",
    "我们分阶段准备了仲裁请求、说明和证据材料。",
    "중재 신청서, 의견서 및 증거 패키지를 단계적으로 준비했습니다."
  ],
  "Хохирлын хэмжээ, шалтгаант холбоо, гэрээний хариуцлагын үндэслэлийг арбитрын бүрэлдэхүүнд тодорхой танилцуулсан.": [
    "We clearly presented the amount of damages, causation, and contractual liability grounds to the arbitral tribunal.",
    "我们向仲裁庭清晰说明了损失金额、因果关系和合同责任依据。",
    "손해액, 인과관계 및 계약상 책임 근거를 중재판정부에 명확히 제시했습니다."
  ],
  "Арбитрын шийдвэрээр 120 сая төгрөгийн нөхөн төлбөрийг бүрэн гаргуулах шийдвэр гарсан.": [
    "The arbitral award ordered full compensation of MNT 120 million.",
    "仲裁裁决支持全额赔偿1.2亿图格里克。",
    "중재 판정으로 1억2천만 투그릭 전액 배상이 인정되었습니다."
  ],
  "Гэрлэлт цуцалсны дараах хүүхдийн асрамж, уулзалтын журам, тэтгэлгийн хэмжээ зэрэг асуудал маргаантай байсан. Хүүхдийн эрх ашиг, тогтвортой амьдрах орчин, эцэг эхийн бодит боломжийг хамтад нь үнэлэх шаардлагатай болсон.": [
    "After divorce, child custody, visitation arrangements, and child support were disputed. The child’s best interests, stable living environment, and the parents’ actual circumstances had to be assessed together.",
    "离婚后，子女监护、探视安排和抚养费金额存在争议。需要综合评估子女最佳利益、稳定生活环境以及父母双方的实际能力。",
    "이혼 후 자녀 양육, 면접교섭 방식, 양육비 금액 등이 쟁점이었습니다. 자녀의 이익, 안정적인 생활환경, 부모의 실제 능력을 함께 평가해야 했습니다."
  ],
  "Хүүхдийн амьдрах орчин, боловсрол, асран хамгаалах бодит нөхцөлийг нотлох баримтаар бүрдүүлсэн.": [
    "We gathered evidence on the child’s living environment, education, and actual caregiving conditions.",
    "我们收集了有关子女生活环境、教育和实际照护条件的证据。",
    "자녀의 생활환경, 교육 및 실제 양육 조건에 관한 증거를 확보했습니다."
  ],
  "Гадаадад ажиллаж буй эцгийн орлого, харилцааны боломж, тэтгэлгийн бодит хэмжээг тооцсон.": [
    "We assessed the income of the father working abroad, communication possibilities, and a realistic child support amount.",
    "我们评估了在国外工作的父亲收入、联系可能性以及合理抚养费金额。",
    "해외에서 근무하는 부친의 소득, 연락 가능성 및 현실적인 양육비 금액을 산정했습니다."
  ],
  "Шүүхэд хүүхдийн эрх ашигт нийцсэн асрамж, уулзалтын журам, тэтгэлгийн санал гаргасан.": [
    "We submitted custody, visitation, and child support proposals aligned with the child’s best interests.",
    "我们向法院提出了符合子女最佳利益的监护、探视和抚养费方案。",
    "자녀의 이익에 부합하는 양육권, 면접교섭 및 양육비 제안을 법원에 제출했습니다."
  ],
  "Хүүхдийн асрамжийн эрхийг үйлчлүүлэгчид тогтоож, тэтгэлгийн хэмжээг шүүхээр баталгаажуулсан.": [
    "Custody was granted to the client, and the child support amount was confirmed by the court.",
    "法院确认由客户取得子女监护权，并确定抚养费金额。",
    "법원은 의뢰인에게 양육권을 인정하고 양육비 금액을 확정했습니다."
  ],
  "Татварын хяналт шалгалтын акт, нэмэлт ногдуулалтын үндэслэл нь компанийн бүртгэл, анхан шатны баримт, холбогдох хууль хэрэглээтэй зөрчилдөж байсан. Захиргааны журмаар болон шүүхийн шатанд эрхээ хамгаалах шаардлага үүссэн.": [
    "The tax inspection act and grounds for additional assessment conflicted with the company’s records, primary documents, and applicable law. The company needed to defend its rights through administrative procedures and in court.",
    "税务检查文书及追加征税依据与公司记录、原始凭证和相关法律适用相矛盾。因此，公司需要通过行政程序及法院阶段维护自身权利。",
    "세무조사 결과 및 추가 부과 근거가 회사의 기록, 원시 문서 및 관련 법 적용과 충돌했습니다. 회사는 행정절차와 법원 단계에서 권리를 보호할 필요가 있었습니다."
  ],
  "Татварын акт, нягтлан бодох бүртгэл, анхан шатны баримтыг тулган шалгаж зөрүүтэй тооцооллыг тодорхойлсон.": [
    "We cross-checked the tax act, accounting records, and primary documents to identify incorrect calculations.",
    "我们核对税务文书、会计记录和原始凭证，确定了错误计算。",
    "세무 문서, 회계 기록 및 원시 문서를 대조하여 잘못된 산정을 확인했습니다."
  ],
  "Захиргааны гомдол болон шүүхийн нэхэмжлэлийн үндэслэлийг хууль хэрэглээ, баримтаар баталгаажуулсан.": [
    "We substantiated the administrative complaint and court claim with legal grounds and evidence.",
    "我们以法律适用和证据支持行政申诉及法院诉讼请求。",
    "행정 이의신청 및 법원 청구의 근거를 법 적용과 증거로 뒷받침했습니다."
  ],
  "Маргааны явцад нэмэлт тайлбар, нотлох баримтыг хугацаанд нь гаргаж, компанийн байр суурийг хамгаалсан.": [
    "During the dispute, we submitted additional explanations and evidence on time and protected the company’s position.",
    "在争议过程中，我们按时提交补充说明和证据，维护了公司的立场。",
    "분쟁 과정에서 추가 설명과 증거를 기한 내 제출하여 회사의 입장을 보호했습니다."
  ],
  "Захиргааны шүүх нэмэлт татварын шийдвэрийг хүчингүй болгож, компанид 85 сая төгрөгийн эрсдэлээс сэргийлсэн.": [
    "The administrative court annulled the additional tax decision, preventing an MNT 85 million risk to the company.",
    "行政法院撤销了追加税决定，使公司避免了8500万图格里克的风险。",
    "행정법원은 추가 세금 부과 결정을 취소하여 회사가 8천5백만 투그릭의 위험을 피할 수 있게 했습니다."
  ],
  "Талуудын нэр, хаяг, регистр": [
    "Names, addresses, and registration numbers of the parties",
    "各方名称、地址和登记编号",
    "당사자의 이름, 주소 및 등록번호"
  ],
  "Гэрээний зүйл, агуулга": [
    "Subject and content of the contract",
    "合同标的和内容",
    "계약의 목적과 내용"
  ],
  "Үнэ, төлбөрийн нөхцөл": [
    "Price and payment terms",
    "价格和付款条件",
    "가격 및 지급 조건"
  ],
  "Хугацаа, дуусгавар болох үндэслэл": [
    "Term and grounds for termination",
    "期限及终止依据",
    "기간 및 종료 사유"
  ],
  "Маргаан шийдвэрлэх журам": [
    "Dispute resolution procedure",
    "争议解决程序",
    "분쟁 해결 절차"
  ],
  "Нэхэмжлэлийн бичиг бэлтгэх": [
    "Prepare the statement of claim",
    "准备起诉状",
    "소장 작성"
  ],
  "Улсын тэмдэгтийн хураамж төлөх": [
    "Pay the state stamp duty",
    "缴纳国家印花/诉讼费用",
    "인지대 납부"
  ],
  "Шүүхэд нэхэмжлэл өгөх": [
    "File the claim with the court",
    "向法院提交起诉材料",
    "법원에 청구 제출"
  ],
  "Шүүх хуралдааны мэдэгдэл хүлээн авах": [
    "Receive the court hearing notice",
    "接收庭审通知",
    "재판 기일 통지 수령"
  ],
  "Хуралдаанд оролцох, нотлох баримт гаргах": [
    "Attend the hearing and submit evidence",
    "参加庭审并提交证据",
    "재판에 출석하고 증거 제출"
  ],
  "Компанийн нэр шалгах, сонгох": [
    "Check and choose the company name",
    "核查并选择公司名称",
    "회사명 확인 및 선택"
  ],
  "Үүсгэн байгуулах баримт бэлтгэх": [
    "Prepare incorporation documents",
    "准备设立文件",
    "설립 서류 준비"
  ],
  "Улсын бүртгэлд бүртгүүлэх": [
    "Register with the state registry",
    "办理国家登记",
    "국가등록 완료"
  ],
  "Татварын бүртгэл хийх": [
    "Complete tax registration",
    "办理税务登记",
    "세무 등록"
  ],
  "Банкны данс нээх": [
    "Open a bank account",
    "开立银行账户",
    "은행 계좌 개설"
  ],
  "Чимээгүй байх эрхтэй — ашиглаарай": [
    "You have the right to remain silent — use it",
    "您有权保持沉默——请行使该权利",
    "묵비권이 있습니다 — 행사하세요"
  ],
  "Өмгөөлөгч авах эрхтэй — шаардаарай": [
    "You have the right to an attorney — request one",
    "您有权聘请律师——请要求律师在场",
    "변호인의 조력을 받을 권리가 있습니다 — 요구하세요"
  ],
  "Чимээгүй байх эрхтэй": [
    "You have the right to remain silent",
    "您有权保持沉默",
    "묵비권이 있습니다"
  ],
  "Өмгөөлөгч авах эрхтэй": [
    "You have the right to an attorney",
    "您有权聘请律师",
    "변호인의 조력을 받을 권리가 있습니다"
  ],
  "Гэр бүлдээ мэдэгдэх эрхтэй": [
    "You have the right to notify your family",
    "您有权通知家属",
    "가족에게 알릴 권리가 있습니다"
  ],
  "Эмч үзүүлэх эрхтэй": [
    "You have the right to see a doctor",
    "您有权接受医生检查",
    "의사의 진료를 받을 권리가 있습니다"
  ],
  "48 цагт цагдан хорих шийдвэр гарах ёстой": [
    "A detention decision must be issued within 48 hours",
    "拘留决定应在48小时内作出",
    "48시간 내 구속 결정이 내려져야 합니다"
  ],
  "Гэрээслэлтэй бол гэрээслэлийн дагуу": [
    "If there is a will, inheritance follows the will",
    "有遗嘱的，按遗嘱继承",
    "유언이 있으면 유언에 따릅니다"
  ],
  "Гэрээслэлгүй бол хуулиар — хамгийн ойрын садан": [
    "If there is no will, inheritance follows the law — closest relatives",
    "无遗嘱的，依法由近亲属继承",
    "유언이 없으면 법에 따라 가까운 친족이 상속합니다"
  ],
  "Гэрээслэлгүй бол хуулиар": [
    "If there is no will, inheritance follows the law",
    "无遗嘱的，依法继承",
    "유언이 없으면 법에 따릅니다"
  ],
  "Өвийг нотариатаар баталгаажуулна": [
    "Inheritance is certified by a notary",
    "继承需经公证确认",
    "상속은 공증으로 확인합니다"
  ],
  "6 сарын хугацаанд хүлээн авна": [
    "Acceptance must be made within 6 months",
    "应在6个月内接受继承",
    "6개월 이내에 수락해야 합니다"
  ],
  "Татвар, өр төлбөрийг шалгана": [
    "Taxes and debts are checked",
    "核查税费和债务",
    "세금 및 채무를 확인합니다"
  ],
  "Арбитр vs Шүүх: Ялгаа юу вэ?": [
    "Arbitration vs Court: What is the difference?",
    "仲裁与法院：有什么区别？",
    "중재 vs 법원: 차이점은 무엇인가요?"
  ],
  "Арбитр: хурдан, нууцлалтай, хямд": [
    "Arbitration: faster, confidential, and cost-effective",
    "仲裁：更快、保密、成本较低",
    "중재: 빠르고 비공개이며 비용 효율적"
  ],
  "Арбитр нь хурдан, нууцлалтай": [
    "Arbitration is faster and confidential",
    "仲裁更快且保密",
    "중재는 빠르고 비공개입니다"
  ],
  "Шүүх: нийтэд нээлттэй, давж заалдах боломж": [
    "Court: public, with appeal options",
    "法院：公开审理，可上诉",
    "법원: 공개 절차, 항소 가능"
  ],
  "Шүүх нь нийтэд нээлттэй": [
    "Court proceedings are public",
    "法院审理通常公开",
    "법원 절차는 공개됩니다"
  ],
  "Арбитрын шийдвэр эцсийн — давж заалдахгүй": [
    "An arbitral award is final — usually no appeal",
    "仲裁裁决为终局——通常不能上诉",
    "중재 판정은 최종적이며 일반적으로 항소할 수 없습니다"
  ],
  "Арбитрын шийдвэр эцсийн байх нь элбэг": [
    "An arbitral award is often final",
    "仲裁裁决通常为终局",
    "중재 판정은 최종적인 경우가 많습니다"
  ],
  "Гэрээнд арбитрын заалт байвал заавал мөрдөнө": [
    "If the contract has an arbitration clause, it must be followed",
    "合同中有仲裁条款的，应予遵守",
    "계약에 중재 조항이 있으면 따라야 합니다"
  ],
  "Гэрээнд арбитрын заалт байвал мөрдөнө": [
    "If the contract has an arbitration clause, it is followed",
    "合同中有仲裁条款的，应按其执行",
    "계약에 중재 조항이 있으면 그에 따릅니다"
  ],
  "Олон улсын маргаанд арбитр тохиромжтой": [
    "Arbitration is suitable for international disputes",
    "仲裁适合国际争议",
    "중재는 국제 분쟁에 적합합니다"
  ],
  "Анхны зөвлөгөө үнэтэй юу?": [
    "Is the initial consultation paid?",
    "初次咨询收费吗？",
    "초기 상담은 유료인가요?"
  ],
  "Үгүй. Анхны зөвлөгөө бүрэн үнэ төлбөргүй. Бид таны нөхцөл байдлыг сонсож, хэрхэн тусалж болохыг тайлбарлана. Үүний дараа үйлчилгээний нөхцөл, зардлыг тохиролцоно.": [
    "No. The initial consultation is completely free. We listen to your situation and explain how we may help. Service terms and fees are then agreed separately.",
    "不收费。初次咨询完全免费。我们会了解您的情况，并说明可以如何提供帮助。之后再协商服务条件和费用。",
    "아닙니다. 초기 상담은 전액 무료입니다. 상황을 듣고 어떤 도움을 드릴 수 있는지 설명한 뒤 서비스 조건과 비용을 협의합니다."
  ],
  "Хэрэгт оролцоход ямар бичиг баримт бэлдэх вэ?": [
    "What documents should I prepare for a case?",
    "参与案件时应准备哪些文件？",
    "사건 진행을 위해 어떤 서류를 준비해야 하나요?"
  ],
  "Хэргийн төрлөөс хамааран өөр байх боловч ерөнхийдөө: иргэний үнэмлэх, холбогдох гэрээ, хэлцлийн баримт, захидал харилцаа, санхүүгийн баримт бичгүүдийг бэлдэх хэрэгтэй. Дэлгэрэнгүйг анхны уулзалтаар тодорхойлно.": [
    "It depends on the type of case, but generally you should prepare your ID, relevant contracts and transaction documents, correspondence, and financial documents. Details are clarified during the initial meeting.",
    "具体取决于案件类型，但通常需要准备身份证件、相关合同和交易文件、往来函件以及财务资料。详细材料将在初次会面时确认。",
    "사건 유형에 따라 다르지만 일반적으로 신분증, 관련 계약 및 거래 문서, 서신, 재무 자료를 준비해야 합니다. 자세한 내용은 첫 상담에서 확인합니다."
  ],
  "Хэргийн төрлөөс хамааран өөр байх боловч ерөнхийдөө иргэний үнэмлэх, холбогдох гэрээ, хэлцлийн баримт, захидал харилцаа, санхүүгийн баримт бичгүүдийг бэлдэх хэрэгтэй. Дэлгэрэнгүйг анхны уулзалтаар тодорхойлно.": [
    "It depends on the type of case, but generally you should prepare your ID, relevant contracts and transaction documents, correspondence, and financial documents. Details are clarified during the initial meeting.",
    "具体取决于案件类型，但通常需要准备身份证件、相关合同和交易文件、往来函件以及财务资料。详细材料将在初次会面时确认。",
    "사건 유형에 따라 다르지만 일반적으로 신분증, 관련 계약 및 거래 문서, 서신, 재무 자료를 준비해야 합니다. 자세한 내용은 첫 상담에서 확인합니다."
  ],
  "Хэргийг шийдвэрлэхэд хэр удах вэ?": [
    "How long does it take to resolve a case?",
    "案件解决需要多长时间？",
    "사건 해결에는 얼마나 걸리나요?"
  ],
  "Хэргийн нарийн төвөгтэй байдлаас хамааран хэдэн долоо хоногоос хэдэн жил хүртэл. Иргэний энгийн маргааныг 3-6 сарт, нарийн төвөгтэй хэргийг 1-3 жилд шийдвэрлэдэг. Арбитраар 1-6 сард хурдан шийдэх боломжтой.": [
    "Depending on complexity, it may take from several weeks to several years. Simple civil disputes may be resolved in 3–6 months, while complex cases may take 1–3 years. Arbitration may allow faster resolution within 1–6 months.",
    "根据复杂程度，可能需要数周至数年。简单民事争议可在3—6个月内解决，复杂案件可能需要1—3年。仲裁有时可在1—6个月内较快解决。",
    "복잡성에 따라 몇 주에서 몇 년까지 걸릴 수 있습니다. 단순 민사 분쟁은 3~6개월, 복잡한 사건은 1~3년이 걸릴 수 있습니다. 중재는 1~6개월 내 비교적 빠른 해결이 가능합니다."
  ],
  "Хэргийн нарийн төвөгтэй байдлаас хамааран хэдэн долоо хоногоос хэдэн жил хүртэл үргэлжилж болно. Иргэний энгийн маргааныг 3-6 сард, нарийн төвөгтэй хэргийг 1-3 жилд шийдвэрлэх тохиолдол бий.": [
    "Depending on complexity, it may take from several weeks to several years. Simple civil disputes may be resolved in 3–6 months, while complex cases may take 1–3 years.",
    "根据复杂程度，可能持续数周至数年。简单民事争议可在3—6个月内解决，复杂案件有时需要1—3年。",
    "복잡성에 따라 몇 주에서 몇 년까지 걸릴 수 있습니다. 단순 민사 분쟁은 3~6개월, 복잡한 사건은 1~3년이 걸릴 수 있습니다."
  ],
  "Хуулийн зөвлөгөөг онлайнаар авч болох уу?": [
    "Can I receive legal advice online?",
    "可以在线获得法律咨询吗？",
    "온라인으로 법률 상담을 받을 수 있나요?"
  ],
  "Тийм. Цахим шуудан, утас, видео дуудлагаар зөвлөгөө авах боломжтой. Баримт бичгийг цахимаар дамжуулан хянана. Гэхдээ шүүхийн төлөөлөл, нотариатын ажил биечлэн хийгдэнэ.": [
    "Yes. Consultations are available by email, phone, or video call. Documents can be reviewed electronically. However, court representation and notarial work may require in-person handling.",
    "可以。可通过电子邮件、电话或视频通话进行咨询，文件也可电子审阅。但诉讼代理和公证相关工作可能需要线下办理。",
    "네. 이메일, 전화, 영상통화로 상담할 수 있으며 문서는 전자 방식으로 검토할 수 있습니다. 다만 법원 대리나 공증 업무는 대면 처리가 필요할 수 있습니다."
  ],
  "Тийм. Цахим шуудан, утас, видео дуудлагаар зөвлөгөө авах боломжтой. Баримт бичгийг цахимаар дамжуулан хянана.": [
    "Yes. Consultations are available by email, phone, or video call. Documents can be reviewed electronically.",
    "可以。可通过电子邮件、电话或视频通话进行咨询，文件也可通过电子方式审阅。",
    "네. 이메일, 전화, 영상통화로 상담할 수 있으며 문서는 전자 방식으로 검토할 수 있습니다."
  ],
  "Манай мэдээлэл нууцлагдах уу?": [
    "Will our information be kept confidential?",
    "我们的信息会保密吗？",
    "저희 정보는 비밀로 보호되나요?"
  ],
  "Тийм, заавал. Өмгөөлөгч-үйлчлүүлэгчийн харилцааны нууцыг Монгол Улсын хуулиар хатуу хамгаалдаг. Таны мэдээллийг зөвшөөрөлгүйгээр гуравдагч этгээдэд дамжуулахыг хориглоно.": [
    "Yes. Attorney-client confidentiality is strictly protected under Mongolian law. Your information will not be disclosed to third parties without permission.",
    "会。律师—客户关系中的保密义务受蒙古国法律严格保护。未经许可，不会向第三方披露您的信息。",
    "네. 변호사-의뢰인 비밀은 몽골 법에 의해 엄격히 보호됩니다. 귀하의 정보는 허락 없이 제3자에게 제공되지 않습니다."
  ],
  "Тийм, заавал. Өмгөөлөгч-үйлчлүүлэгчийн харилцааны нууцыг Монгол Улсын хуулиар хамгаалдаг. Таны мэдээллийг зөвшөөрөлгүйгээр гуравдагч этгээдэд дамжуулахыг хориглоно.": [
    "Yes. Attorney-client confidentiality is protected under Mongolian law. Your information will not be disclosed to third parties without permission.",
    "会。律师—客户关系中的保密义务受蒙古国法律保护。未经许可，不会向第三方披露您的信息。",
    "네. 변호사-의뢰인 비밀은 몽골 법에 의해 보호됩니다. 귀하의 정보는 허락 없이 제3자에게 제공되지 않습니다."
  ],
  "Яаралтай тохиолдолд хэрхэн холбогдох вэ?": [
    "How do I contact you in an urgent situation?",
    "紧急情况下如何联系？",
    "긴급 상황에서는 어떻게 연락하나요?"
  ],
  "Яаралтай тохиолдолд 9903-5509 дугаарт залгана уу. Баривчлагдсан, цагдаанд дуудагдсан, шүүх эхлэх гэж байгаа нөхцөлд ажлын цаг харгалзахгүй хариулна.": [
    "In urgent situations, please call 9903-5509. If you are detained, called by the police, or facing an imminent court hearing, we respond regardless of business hours.",
    "紧急情况下，请拨打9903-5509。如遇被拘留、被警方传唤或庭审即将开始等情况，我们不受工作时间限制提供回应。",
    "긴급 상황에서는 9903-5509로 전화해 주세요. 체포, 경찰 출석 요구, 임박한 재판 등 상황에는 업무시간과 관계없이 대응합니다."
  ],
  "Туршлага, ёс зүй, итгэлцэл дээр суурилсан замнал.": [
    "A journey built on experience, ethics, and trust.",
    "建立在经验、职业伦理和信任之上的历程。",
    "경험, 윤리, 신뢰에 기반한 여정."
  ],
  "BEGZ LAW FIRM нь хууль зүйн зөвлөх, өмгөөлөл, шүүхэд төлөөлөх ажлын олон жилийн туршлага дээр тулгуурлан үйлчлүүлэгч бүрт ойлгомжтой, нягт, бодит шийдэл санал болгодог.": [
    "BEGZ LAW FIRM provides clear, structured, and practical solutions to every client based on years of experience in legal advisory, advocacy, and court representation.",
    "BEGZ律师事务所基于多年法律顾问、律师服务和诉讼代理经验，为每位客户提供清晰、严谨、务实的解决方案。",
    "BEGZ LAW FIRM은 법률 자문, 변호 및 법원 대리 분야의 다년간 경험을 바탕으로 의뢰인마다 명확하고 체계적이며 실질적인 해결책을 제공합니다."
  ],
  "Хуулийн ажлыг зөвхөн баримт бичиг биш, шийдвэр гаргалтын стратеги гэж хардаг.": [
    "We see legal work not merely as documents, but as a decision-making strategy.",
    "我们认为法律工作不仅是文件处理，更是决策策略。",
    "저희는 법률 업무를 단순한 문서 작업이 아니라 의사결정 전략으로 봅니다."
  ],
  "Манай баг асуудлын нөхцөл байдал, хууль зүйн үр дагавар, цаг хугацаа, эрсдэлийг хамтад нь үнэлж ажилладаг.": [
    "Our team evaluates the facts, legal consequences, timeline, and risks together.",
    "我们的团队会综合评估事实情况、法律后果、时间安排和风险。",
    "저희 팀은 사실관계, 법적 결과, 시간, 위험을 함께 평가합니다."
  ],
  "Үйлчлүүлэгчийн эрх ашгийг ойлгомжтой процессоор хамгаална.": [
    "We protect clients’ interests through a clear process.",
    "我们通过清晰流程保护客户权益。",
    "명확한 절차로 의뢰인의 이익을 보호합니다."
  ],
  "Хуулийн үйлчилгээ нь зөвхөн маргаан үүссэний дараах арга хэмжээ биш. Бид зөвлөгөө, гэрээ, дотоод шийдвэр, нотлох баримт, шүүхийн стратеги зэрэг шат бүрт урьдчилан тооцсон ажил хэрэгтэй гэж үздэг.": [
    "Legal service is not only a response after a dispute arises. We believe planned work is needed at every stage, including advice, contracts, internal decisions, evidence, and litigation strategy.",
    "法律服务并不只是争议发生后的应对措施。我们认为，在咨询、合同、内部决策、证据和诉讼策略等每个阶段都需要提前规划。",
    "법률 서비스는 분쟁 발생 후의 대응만이 아닙니다. 자문, 계약, 내부 의사결정, 증거, 소송 전략 등 모든 단계에서 사전 계획이 필요하다고 봅니다."
  ],
  "2008 оноос эхтэй хууль зүйн практик туршлага нь иргэний хэрэг, бизнесийн маргаан, үл хөдлөх хөрөнгө, өв залгамжлал, гэр бүлийн харилцаа болон шүүхэд төлөөлөх чиглэлээр тогтвортой хуримтлагдсан.": [
    "Since 2008, our legal practice experience has steadily developed in civil cases, business disputes, real estate, inheritance, family relations, and court representation.",
    "自2008年以来，我们在民事案件、商业争议、房地产、继承、家庭关系和诉讼代理方面持续积累法律实践经验。",
    "2008년부터 민사 사건, 비즈니스 분쟁, 부동산, 상속, 가족관계 및 법원 대리 분야에서 법률 실무 경험을 꾸준히 축적해 왔습니다."
  ],
  "\"Бэгз Ло Консалтинг\" ХХК нь 2016 онд үйл ажиллагааны сууриа тавьж, 2025 онд багийн бүтэц, үйлчилгээний аргачлал, брэндийн байр сууриа шинэчлэн хөгжүүлсэн.": [
    "\"Begz Lo Consulting\" LLC established its operational foundation in 2016 and renewed its team structure, service methodology, and brand positioning in 2025.",
    "“Begz Lo Consulting”有限责任公司于2016年奠定运营基础，并于2025年更新团队结构、服务方法和品牌定位。",
    "\"Begz Lo Consulting\" LLC는 2016년에 운영 기반을 마련하고 2025년에 팀 구조, 서비스 방식 및 브랜드 포지셔닝을 새롭게 정비했습니다."
  ],
  "Өнөөдөр бид дотоодын болон гадаадын иргэн, аж ахуйн нэгжид хууль зүйн зөвлөх, өмгөөллийн болон шүүхэд төлөөлөх үйлчилгээг нэг цэгээс уялдаатай хүргэхийг зорьдог.": [
    "Today, we aim to provide integrated legal advisory, advocacy, and court representation services to domestic and foreign individuals and businesses from one point of service.",
    "如今，我们致力于为国内外个人和企业提供一站式、协同化的法律顾问、律师服务和诉讼代理服务。",
    "오늘날 저희는 국내외 개인 및 기업에게 법률 자문, 변호 및 법원 대리 서비스를 한 곳에서 통합적으로 제공하는 것을 목표로 합니다."
  ],
  "Туршлагын эхлэл": [
    "Beginning of Experience",
    "经验的起点",
    "경험의 시작"
  ],
  "Компанийн суурь": [
    "Company Foundation",
    "公司基础",
    "회사 기반"
  ],
  "Шинэ бүтэц": [
    "New Structure",
    "新结构",
    "새로운 구조"
  ],
  "Үйлчилгээний чиглэл": [
    "Service Areas",
    "服务领域",
    "서비스 분야"
  ],
  "үйлчилгээний чиглэл": [
    "service areas",
    "服务领域",
    "서비스 분야"
  ],
  "3 үндсэн салбар": [
    "3 core areas",
    "三大核心领域",
    "3대 핵심 분야"
  ],
  "Он цагийн дараалал": [
    "Timeline",
    "时间线",
    "연혁"
  ],
  "Байгууллагын хөгжлийн гол үе шат.": [
    "Key stages of the organization’s development.",
    "机构发展的主要阶段。",
    "조직 발전의 주요 단계."
  ],
  "Ажлын зарчим": [
    "Working Principles",
    "工作原则",
    "업무 원칙"
  ],
  "Бидний туршлагыг тодорхойлдог үнэт зүйлс.": [
    "Values that define our experience.",
    "定义我们经验的价值观。",
    "저희 경험을 정의하는 가치."
  ],
  "Үйлчлүүлэгчийн мэдээлэл, баримт бичиг, маргааны стратегийг мэргэжлийн нууцлалын зарчмаар хамгаална.": [
    "We protect client information, documents, and dispute strategies under professional confidentiality principles.",
    "我们依据职业保密原则保护客户信息、文件和争议策略。",
    "전문적 비밀유지 원칙에 따라 의뢰인의 정보, 문서 및 분쟁 전략을 보호합니다."
  ],
  "Бодит үнэлгээ": [
    "Realistic Assessment",
    "实际评估",
    "현실적 평가"
  ],
  "Эрх зүйн боломж, эрсдэл, хугацаа, зардал, нотлох баримтын нөхцөлийг бодитоор тайлбарлаж ажиллана.": [
    "We realistically explain legal options, risks, timelines, costs, and evidentiary conditions.",
    "我们会实际说明法律可能性、风险、时间、费用和证据条件。",
    "법적 가능성, 위험, 기간, 비용 및 증거 조건을 현실적으로 설명합니다."
  ],
  "Ойлгомжтой харилцаа": [
    "Clear Communication",
    "清晰沟通",
    "명확한 소통"
  ],
  "Хуулийн төвөгтэй асуудлыг үйлчлүүлэгч шийдвэр гаргаж чадахуйц энгийн, тодорхой хэлээр тайлбарлана.": [
    "We explain complex legal issues in simple and clear language so clients can make decisions.",
    "我们用简单清晰的语言解释复杂法律问题，帮助客户作出决定。",
    "복잡한 법률 문제를 의뢰인이 결정할 수 있도록 쉽고 명확한 언어로 설명합니다."
  ],
  "Өнөөгийн чиглэл": [
    "Current Direction",
    "当前方向",
    "현재 방향"
  ],
  "BEGZ LAW FIRM нь хууль зүйн зөвлөх үйлчилгээ, шүүхэд төлөөлөх үйлчилгээ, өмгөөллийн үйлчилгээг уялдаатай хүргэж, үйлчлүүлэгчийн эрх ашгийг урьдчилан төлөвлөсөн стратегиар хамгаалах зарчмаа үргэлжлүүлэн хөгжүүлж байна.": [
    "BEGZ LAW FIRM continues to develop its approach of delivering integrated legal advisory, court representation, and advocacy services while protecting client interests through planned strategy.",
    "BEGZ律师事务所持续完善法律顾问、诉讼代理和律师服务的协同提供方式，并通过预先规划的策略保护客户权益。",
    "BEGZ LAW FIRM은 법률 자문, 법원 대리 및 변호 서비스를 통합적으로 제공하고, 계획된 전략으로 의뢰인의 이익을 보호하는 원칙을 계속 발전시키고 있습니다."
  ],
  "Гэрээ, компанийн шийдвэр, өдөр тутмын эрх зүйн эрсдэл, баримт бичгийн хяналтыг бизнесийн зорилготой уялдуулан ойлгомжтой зөвлөнө.": [
    "We provide clear advice on contracts, corporate decisions, day-to-day legal risks, and document review aligned with business objectives.",
    "我们结合商业目标，就合同、公司决策、日常法律风险和文件审查提供清晰咨询。",
    "비즈니스 목표에 맞추어 계약, 회사 의사결정, 일상 법률 위험 및 문서 검토에 대해 명확한 자문을 제공합니다."
  ],
  "Асуудлыг зөвхөн хууль талаас нь бус, хугацаа, зардал, бодит үр дагавартай нь хамт харна.": [
    "We look at issues not only from the legal side, but also together with time, cost, and practical consequences.",
    "我们不仅从法律角度看问题，也会结合时间、成本和实际后果进行判断。",
    "문제를 법률적 측면뿐 아니라 시간, 비용, 실제 결과와 함께 검토합니다."
  ],
  "Гэрээ боловсруулах, хянах, эрсдэлийн заалт, хариуцлага, маргаан шийдвэрлэх нөхцөлийг тодорхой болгоно.": [
    "We draft and review contracts and clarify risk clauses, liability, and dispute resolution terms.",
    "我们起草和审查合同，并明确风险条款、责任和争议解决条件。",
    "계약서 작성 및 검토, 위험 조항, 책임 및 분쟁 해결 조건을 명확히 합니다."
  ],
  "Шийдвэр гаргахаас өмнө хууль зүйн эрсдэл, боломжит хувилбар, дараагийн алхмыг гаргана.": [
    "Before decisions are made, we identify legal risks, available options, and next steps.",
    "在作出决定前，我们会明确法律风险、可选方案和下一步。",
    "의사결정 전에 법적 위험, 가능한 선택지 및 다음 단계를 제시합니다."
  ],
  "Байгууллагын өдөр тутмын асуулт, ажилтны харилцаа, түншлэл, дотоод баримт бичигт зөвлөнө.": [
    "We advise on daily corporate questions, employee relations, partnerships, and internal documents.",
    "我们就机构日常问题、员工关系、合作关系和内部文件提供咨询。",
    "기관의 일상적 질문, 직원 관계, 파트너십 및 내부 문서에 대해 자문합니다."
  ],
  "Зорилго, хугацаа, эрсдэл, шаардлагатай баримтыг тодорхойлно.": [
    "We clarify goals, timeline, risks, and required documents.",
    "我们明确目标、时间、风险和所需文件。",
    "목표, 일정, 위험 및 필요한 서류를 명확히 합니다."
  ],
  "Хэрэгжих боломжтой хувилбаруудыг давуу болон сул талтай нь тайлбарлана.": [
    "We explain feasible options with their advantages and disadvantages.",
    "我们说明可执行方案及其优缺点。",
    "실행 가능한 선택지를 장단점과 함께 설명합니다."
  ],
  "Шийдвэрээ хэрэгжүүлэхэд шаардлагатай бичиг баримт, харилцааг дэмжинэ.": [
    "We support the documents and communications needed to implement your decision.",
    "我们协助准备执行决定所需的文件和沟通。",
    "결정을 실행하는 데 필요한 문서와 커뮤니케이션을 지원합니다."
  ],
  "Нэхэмжлэл, хариу тайлбар, нотлох баримт, шүүх хуралдааны стратегийг цэгцтэй боловсруулж, таны эрх ашгийг шат бүрт төлөөлнө.": [
    "We systematically prepare claims, responses, evidence, and hearing strategy, representing your interests at every stage.",
    "我们系统准备诉状、答辩、证据和庭审策略，并在每个阶段代表您的权益。",
    "청구, 답변, 증거 및 재판 전략을 체계적으로 준비하고 모든 단계에서 귀하의 이익을 대리합니다."
  ],
  "Маргааны зорилго, нотлох баримтын зураглал, боломжит эрсдэлийг эхнээс нь тодорхой болгоно.": [
    "We clarify the dispute objective, evidence map, and potential risks from the outset.",
    "我们从一开始就明确争议目标、证据结构和潜在风险。",
    "분쟁의 목표, 증거 구조 및 잠재적 위험을 초기부터 명확히 합니다."
  ],
  "Шүүхэд гаргах баримт бичгийг хууль, нотлох баримт, процессын шаардлагад нийцүүлэн бэлтгэнэ.": [
    "We prepare court documents in accordance with legal, evidentiary, and procedural requirements.",
    "我们依据法律、证据和程序要求准备提交法院的文件。",
    "법률, 증거 및 절차 요건에 맞게 법원 제출 문서를 준비합니다."
  ],
  "Маргааны байр суурь, асуулт, тайлбар, нотлох баримтын дарааллыг төлөвлөж оролцоно.": [
    "We plan and participate with a clear position, questions, explanations, and evidence sequence.",
    "我们规划争议立场、提问、说明和证据顺序并参与庭审。",
    "분쟁 입장, 질문, 설명 및 증거 제시 순서를 계획하고 참여합니다."
  ],
  "Эвлэрэл, давж заалдах, биелүүлэх ажиллагаа зэрэг дараагийн алхмуудыг урьдчилан тооцно.": [
    "We anticipate next steps such as settlement, appeal, and enforcement.",
    "我们预先考虑和解、上诉和执行等后续步骤。",
    "합의, 항소, 집행 등 다음 단계를 미리 검토합니다."
  ],
  "Баримт, хугацаа, процессын нөхцөлийг нэг зураглалд оруулна.": [
    "We map facts, deadlines, and procedural conditions in one structure.",
    "我们将事实、期限和程序条件整合成一张清晰图谱。",
    "사실, 기한 및 절차 조건을 하나의 구조로 정리합니다."
  ],
  "Нотлох баримт, шаардлага, эсэргүүцэл, боломжит эвлэрлийг тодорхойлно.": [
    "We identify evidence, claims, objections, and possible settlement options.",
    "我们明确证据、请求、抗辩和可能的和解方案。",
    "증거, 청구, 반박 및 가능한 합의안을 확인합니다."
  ],
  "Шүүх хурал, нэмэлт тайлбар, шийдвэрийн дараах алхамд хамт ажиллана.": [
    "We work with you through hearings, additional submissions, and post-decision steps.",
    "我们在庭审、补充说明和判决后的步骤中与您共同推进。",
    "재판, 추가 설명, 판결 이후 단계까지 함께합니다."
  ],
  "Хэрэг маргааны стратеги, эрх ашгийн хамгаалалт, ажиллагааны шат бүрт үйлчлүүлэгчийн байр суурийг хуульд нийцүүлэн тууштай өмгөөлнө.": [
    "We consistently advocate for the client’s position in accordance with the law at every stage of dispute strategy, interest protection, and proceedings.",
    "我们在案件策略、权益保护和程序每个阶段，依法坚定维护客户立场。",
    "분쟁 전략, 이익 보호 및 절차의 모든 단계에서 의뢰인의 입장을 법에 따라 일관되게 변호합니다."
  ],
  "Бид шийдвэр гаргах мөч бүрт эрх зүйн үр дагавар, нотлох баримт, эрсдэлийг хамтад нь харна.": [
    "At each decision point, we consider legal consequences, evidence, and risks together.",
    "在每个决策节点，我们都会综合考虑法律后果、证据和风险。",
    "의사결정의 순간마다 법적 결과, 증거 및 위험을 함께 검토합니다."
  ],
  "Маргаан, мөрдөн шалгах ажиллагаа, байгууллагын шийдвэр зэрэг нөхцөлд эрхийг тань хамгаална.": [
    "We protect your rights in disputes, investigations, and institutional decision-making situations.",
    "在争议、调查程序和机构决定等情况下，我们保护您的权利。",
    "분쟁, 조사 절차, 기관 결정 등 상황에서 귀하의 권리를 보호합니다."
  ],
  "Өргөдөл, гомдол, тайлбар, хүсэлт, нотлох баримтын бүрдүүлэлтийг мэргэжлийн түвшинд бэлтгэнэ.": [
    "We professionally prepare applications, complaints, explanations, motions, and evidence packages.",
    "我们专业准备申请、投诉、说明、请求和证据材料。",
    "신청서, 이의신청, 설명서, 요청서 및 증거 자료를 전문적으로 준비합니다."
  ],
  "Хэрэг явцын өөрчлөлт, боломжит хувилбар, дараагийн алхмыг тодорхой тайлбарлана.": [
    "We clearly explain case developments, available options, and next steps.",
    "我们清楚说明案件进展变化、可选方案和下一步。",
    "사건 진행 변화, 가능한 선택지 및 다음 단계를 명확히 설명합니다."
  ],
  "Хэрэг, баримт, хугацаа, эрх зүйн эрсдэлийг түргэн үнэлнэ.": [
    "We quickly assess the case, documents, deadlines, and legal risks.",
    "我们快速评估案件、文件、期限和法律风险。",
    "사건, 문서, 기한 및 법적 위험을 신속히 평가합니다."
  ],
  "Байр суурь, нотлох баримт, харилцах тактик, процессын алхмыг төлөвлөнө.": [
    "We plan the position, evidence, communication tactics, and procedural steps.",
    "我们规划立场、证据、沟通策略和程序步骤。",
    "입장, 증거, 커뮤니케이션 전략 및 절차 단계를 계획합니다."
  ],
  "Уулзалт, тайлбар, хүсэлт, хуралдаан, давж заалдах зэрэг ажиллагаанд оролцоно.": [
    "We participate in meetings, explanations, requests, hearings, appeals, and related proceedings.",
    "我们参与会面、说明、请求、庭审、上诉等程序。",
    "면담, 설명, 요청, 재판, 항소 등 절차에 참여합니다."
  ],
  "Нууцлалын бодлого": [
    "Privacy Policy",
    "隐私政策",
    "개인정보 처리방침"
  ],
  "Нууцлалын бодлого - BEGZ Law Firm": [
    "Privacy Policy - BEGZ Law Firm",
    "隐私政策 - BEGZ律师事务所",
    "개인정보 처리방침 - BEGZ Law Firm"
  ],
  "\"Бэгз Ло Консалтинг\" ХХК нь үйлчлүүлэгч, вебсайт ашиглагчийн хувийн мэдээлэл болон илгээсэн баримт бичгийн нууцлалыг мэргэжлийн ёс зүй, холбогдох хууль тогтоомжийн хүрээнд хамгаална.": [
    "\"Begz Lo Consulting\" LLC protects the confidentiality of clients’ and website users’ personal information and submitted documents within the framework of professional ethics and applicable law.",
    "“Begz Lo Consulting”有限责任公司依据职业伦理和适用法律，保护客户及网站用户的个人信息和所提交文件的保密性。",
    "\"Begz Lo Consulting\" LLC는 전문 윤리와 관련 법령의 범위 내에서 의뢰인 및 웹사이트 이용자의 개인정보와 제출 문서의 비밀을 보호합니다."
  ],
  "1. Бид ямар мэдээлэл авч болох вэ?": [
    "1. What information may we collect?",
    "1. 我们可能收集哪些信息？",
    "1. 어떤 정보를 수집할 수 있나요?"
  ],
  "Та холбоо барих маягт, цахим шуудан, утсаар холбогдох үед дараах мэдээллийг авч болно.": [
    "When you contact us through the contact form, email, or phone, we may collect the following information.",
    "当您通过联系表单、电子邮件或电话联系我们时，我们可能收集以下信息。",
    "문의 양식, 이메일 또는 전화로 연락하실 때 다음 정보를 수집할 수 있습니다."
  ],
  "Нэр, байгууллагын нэр, холбоо барих утас, цахим шуудангийн хаяг.": [
    "Name, organization name, contact phone number, and email address.",
    "姓名、机构名称、联系电话和电子邮件地址。",
    "이름, 기관명, 연락처 및 이메일 주소."
  ],
  "Таны асуулт, хүсэлт, эрх зүйн асуудлын товч тайлбар.": [
    "Your question, request, and a brief description of the legal issue.",
    "您的问题、请求和法律事项的简要说明。",
    "질문, 요청 및 법률 문제에 대한 간단한 설명."
  ],
  "Шаардлагатай тохиолдолд таны сайн дурын үндсэн дээр илгээсэн баримт бичиг, хавсралт.": [
    "Documents and attachments voluntarily submitted by you when necessary.",
    "必要时，您自愿提交的文件和附件。",
    "필요한 경우 귀하가 자발적으로 제출한 문서 및 첨부자료."
  ],
  "2. Мэдээллийг ямар зорилгоор ашиглах вэ?": [
    "2. For what purposes is information used?",
    "2. 信息将用于哪些目的？",
    "2. 정보는 어떤 목적으로 사용되나요?"
  ],
  "Таны хүсэлтэд хариу өгөх, уулзалт товлох, үйлчилгээний боломжийг тодорхойлох.": [
    "To respond to your request, schedule a meeting, and determine service availability.",
    "用于回复您的请求、预约会面并确定服务可能性。",
    "요청에 답변하고 미팅을 예약하며 서비스 가능성을 확인하기 위해 사용합니다."
  ],
  "Хууль зүйн зөвлөгөө, төлөөлөл, өмгөөллийн үйлчилгээний хүрээг үнэлэх.": [
    "To assess the scope of legal advice, representation, and advocacy services.",
    "用于评估法律咨询、代理和律师服务的范围。",
    "법률 자문, 대리 및 변호 서비스의 범위를 평가하기 위해 사용합니다."
  ],
  "Дотоод бүртгэл, харилцаа холбоо, үйлчилгээний чанарыг сайжруулах.": [
    "For internal records, communication, and improvement of service quality.",
    "用于内部记录、沟通和提升服务质量。",
    "내부 기록, 소통 및 서비스 품질 개선을 위해 사용합니다."
  ],
  "3. Нууцлал ба хамгаалалт": [
    "3. Confidentiality and protection",
    "3. 保密与保护",
    "3. 비밀유지 및 보호"
  ],
  "Илгээсэн мэдээлэл, баримт бичгийг зөвшөөрөлгүй этгээдэд задруулахгүй байх зарчмыг баримтална. Мэдээлэлд хандах эрхийг зөвхөн тухайн асуудалд ажиллах шаардлагатай ажилтан, өмгөөлөгч, зөвлөхөд хязгаарлана.": [
    "We follow the principle of not disclosing submitted information and documents to unauthorized persons. Access is limited to staff, attorneys, and advisers who need to work on the matter.",
    "我们遵循不向未经授权人员披露所提交信息和文件的原则。信息访问权限仅限于处理相关事项所必需的工作人员、律师和顾问。",
    "제출된 정보와 문서를 무단으로 공개하지 않는 원칙을 따릅니다. 정보 접근 권한은 해당 사안에 필요한 직원, 변호사 및 자문인에게만 제한됩니다."
  ],
  "4. Гуравдагч этгээдэд дамжуулах тухай": [
    "4. Disclosure to third parties",
    "4. 向第三方披露",
    "4. 제3자 제공에 관하여"
  ],
  "Бид таны мэдээллийг хуульд заасан үндэслэл, таны зөвшөөрөл, эсвэл үйлчилгээ үзүүлэхэд зайлшгүй шаардлагатай нөхцөлөөс бусад тохиолдолд гуравдагч этгээдэд дамжуулахгүй.": [
    "We do not disclose your information to third parties except where required by law, with your consent, or where necessary to provide services.",
    "除法律规定、取得您同意或提供服务所必需的情况外，我们不会向第三方披露您的信息。",
    "법률상 근거, 귀하의 동의 또는 서비스 제공에 필수적인 경우를 제외하고 귀하의 정보를 제3자에게 제공하지 않습니다."
  ],
  "5. Холбоо барих": [
    "5. Contact",
    "5. 联系我们",
    "5. 연락처"
  ],
  "Энэхүү бодлого нь вебсайтын ерөнхий нууцлалын мэдээлэл бөгөөд тодорхой гэрээ, өмгөөллийн үйлчилгээний нөхцөлийг орлохгүй.": [
    "This policy provides general website privacy information and does not replace any specific contract or advocacy service terms.",
    "本政策为网站一般隐私信息，并不替代具体合同或律师服务条款。",
    "본 정책은 웹사이트의 일반 개인정보 안내이며 특정 계약이나 변호 서비스 조건을 대체하지 않습니다."
  ],
  "Вебсайт ашиглалтын мэдэгдэл": [
    "Website Use Notice",
    "网站使用声明",
    "웹사이트 이용 고지"
  ],
  "Мэдэгдэл - BEGZ Law Firm": [
    "Notice - BEGZ Law Firm",
    "声明 - BEGZ律师事务所",
    "고지 - BEGZ Law Firm"
  ],
  "Энэхүү вебсайт дахь мэдээлэл нь BEGZ LAW FIRM-ийн үйлчилгээ, нийтлэг эрх зүйн мэдээллийг танилцуулах зорилготой бөгөөд тодорхой хэрэг маргаанд зориулсан хууль зүйн зөвлөгөө гэж ойлгогдохгүй.": [
    "The information on this website is intended to introduce BEGZ LAW FIRM’s services and general legal information and should not be understood as legal advice for a specific case or dispute.",
    "本网站信息旨在介绍BEGZ律师事务所的服务和一般法律信息，不应被理解为针对特定案件或争议的法律意见。",
    "본 웹사이트의 정보는 BEGZ LAW FIRM의 서비스와 일반 법률 정보를 소개하기 위한 것이며 특정 사건이나 분쟁에 대한 법률 자문으로 이해되어서는 안 됩니다."
  ],
  "1. Ерөнхий мэдээллийн шинж": [
    "1. General informational nature",
    "1. 一般信息性质",
    "1. 일반 정보의 성격"
  ],
  "Сайт дээр байршуулсан нийтлэл, тайлбар, үйлчилгээний мэдээлэл нь ерөнхий танилцуулгын зорилготой. Таны нөхцөл байдалд тохирсон хууль зүйн дүгнэлт, зөвлөгөө авахын тулд бидэнтэй шууд холбогдож, баримт мэдээллээ тодорхой танилцуулах шаардлагатай.": [
    "Articles, explanations, and service information on the site are for general introduction only. To receive legal conclusions or advice tailored to your situation, you must contact us directly and present the relevant facts and documents clearly.",
    "网站上的文章、说明和服务信息仅用于一般介绍。若需针对您具体情况的法律意见或建议，请直接联系我们并清楚提供事实和资料。",
    "사이트에 게시된 글, 설명 및 서비스 정보는 일반 소개 목적입니다. 귀하의 상황에 맞는 법률 의견이나 자문을 받으려면 직접 연락하여 관련 사실과 자료를 명확히 제시해야 합니다."
  ],
  "2. Өмгөөлөгч-үйлчлүүлэгчийн харилцаа": [
    "2. Attorney-client relationship",
    "2. 律师—客户关系",
    "2. 변호사-의뢰인 관계"
  ],
  "Вебсайтаар зочлох, холбоо барих маягт илгээх, цахим шуудан илгээх нь дангаараа өмгөөлөгч-үйлчлүүлэгчийн харилцаа үүсгэсэнд тооцогдохгүй. Ийм харилцаа нь талуудын тохиролцоо, үйлчилгээний нөхцөл, холбогдох баримт бичгээр баталгаажсаны дараа үүснэ.": [
    "Visiting the website, submitting a contact form, or sending an email alone does not create an attorney-client relationship. Such a relationship is formed only after agreement of the parties, service terms, and relevant documents are confirmed.",
    "仅访问网站、提交联系表单或发送电子邮件并不构成律师—客户关系。该关系仅在双方达成一致、服务条件及相关文件确认后形成。",
    "웹사이트 방문, 문의 양식 제출 또는 이메일 발송만으로는 변호사-의뢰인 관계가 성립하지 않습니다. 이러한 관계는 당사자 합의, 서비스 조건 및 관련 문서가 확인된 후에 성립합니다."
  ],
  "3. Үр дүнгийн баталгаа өгөхгүй": [
    "3. No guarantee of results",
    "3. 不保证结果",
    "3. 결과 보장 없음"
  ],
  "Өмнөх ажил, туршлага, нийтлэл, тойм мэдээ нь ирээдүйн хэрэг маргаанд ижил үр дүн гарна гэсэн баталгаа биш. Хэрэг бүрийн нөхцөл байдал, нотлох баримт, хууль хэрэглээ өөр байдаг.": [
    "Past work, experience, articles, and case reviews do not guarantee the same result in future matters. Each case has different facts, evidence, and applicable law.",
    "过往工作、经验、文章和案例综述并不保证未来案件会取得相同结果。每个案件的事实、证据和法律适用均不同。",
    "과거 업무, 경험, 글 및 사례 리뷰는 향후 사건에서 동일한 결과를 보장하지 않습니다. 각 사건은 사실관계, 증거 및 적용 법률이 다릅니다."
  ],
  "4. Гадаад холбоос ба мэдээллийн үнэн зөв байдал": [
    "4. External links and accuracy of information",
    "4. 外部链接与信息准确性",
    "4. 외부 링크 및 정보의 정확성"
  ],
  "Сайт дээр гуравдагч этгээдийн эх сурвалж, гадаад холбоос орсон бол тэдгээрийн агуулга, шинэчлэлт, хүртээмжид BEGZ LAW FIRM хариуцлага хүлээхгүй. Бид мэдээллийг боломжит хэмжээнд үнэн зөв байлгахыг зорьдог боловч хууль тогтоомж, практик цаг хугацааны явцад өөрчлөгдөж болно.": [
    "If the site includes third-party sources or external links, BEGZ LAW FIRM is not responsible for their content, updates, or availability. We aim to keep information accurate where possible, but laws and practice may change over time.",
    "如网站包含第三方来源或外部链接，BEGZ律师事务所不对其内容、更新或可访问性承担责任。我们尽力保持信息准确，但法律法规和实践可能随时间变化。",
    "사이트에 제3자 자료나 외부 링크가 포함된 경우, BEGZ LAW FIRM은 그 내용, 업데이트 또는 접근 가능성에 대해 책임지지 않습니다. 가능한 범위에서 정보를 정확하게 유지하려 하지만 법령과 실무는 시간에 따라 변할 수 있습니다."
  ],
  "5. Зохиогчийн эрх": [
    "5. Copyright",
    "5. 著作权",
    "5. 저작권"
  ],
  "Энэхүү вебсайтын текст, дизайн, бүтэц, брэндийн элементүүд нь \"Бэгз Ло Консалтинг\" ХХК-ийн эрхээр хамгаалагдана. Урьдчилсан зөвшөөрөлгүйгээр хуулбарлах, түгээх, арилжааны зориулалтаар ашиглахыг хориглоно.": [
    "The text, design, structure, and brand elements of this website are protected by the rights of \"Begz Lo Consulting\" LLC. Copying, distributing, or using them for commercial purposes without prior permission is prohibited.",
    "本网站的文本、设计、结构和品牌元素受“Begz Lo Consulting”有限责任公司权利保护。未经事先许可，禁止复制、传播或用于商业目的。",
    "본 웹사이트의 텍스트, 디자인, 구조 및 브랜드 요소는 \"Begz Lo Consulting\" LLC의 권리로 보호됩니다. 사전 허가 없이 복제, 배포 또는 상업적 목적으로 사용하는 것은 금지됩니다."
  ],
  "Тодорхой асуудлаар зөвлөгөө авах шаардлагатай бол холбоо барих хэсгээр дамжуулан уулзалт товлоно уу.": [
    "If you need advice on a specific matter, please schedule a meeting through the contact section.",
    "如需针对具体问题获得咨询，请通过联系我们部分预约会面。",
    "특정 사안에 대한 상담이 필요하시면 연락처 섹션을 통해 미팅을 예약해 주세요."
  ],
  "Улаанбаатар: анхны зөвлөгөөг өнөөдөр товлоорой": [
    "Ulaanbaatar: book your initial consultation today",
    "乌兰巴托：今天预约初次咨询",
    "울란바토르: 오늘 초기 상담을 예약하세요"
  ],
  "Бизнесийн эрх зүй, гэрээ, маргаан ба хөрөнгийн хамгаалалт": [
    "Business law, contracts, disputes, and asset protection",
    "商业法律、合同、争议与资产保护",
    "비즈니스 법무, 계약, 분쟁 및 자산 보호"
  ],
  "Том хэлцлийн": [
    "Big-deal",
    "重大交易的",
    "대형 거래의"
  ],
  "нягтрал": [
    "precision",
    "严谨性",
    "정밀함"
  ],
  "хувийн зөвлөхийн": [
    "personal counsel",
    "私人顾问的",
    "개인 자문의"
  ],
  "анхаарал": [
    "attention",
    "关注",
    "세심함"
  ],
  "Бидний арга барил": [
    "Our Approach",
    "我们的方法",
    "저희의 접근 방식"
  ],
  "Алхам бүрт ойлгомжтой тайлбар": [
    "Clear explanations at every step",
    "每一步清晰说明",
    "모든 단계에서 명확한 설명"
  ],
  "Гэнэтийн зүйлгүй": [
    "No surprises",
    "无意外情况",
    "예상 밖 상황 최소화"
  ],
  "Төлөв, хугацаа, зардлын зураглал": [
    "Roadmap of status, time, and cost",
    "状态、时间和费用规划",
    "상태, 기간, 비용의 로드맵"
  ],
  "Идэвхтэй мэдэгдэл": [
    "Proactive updates",
    "主动更新",
    "선제적 안내"
  ],
  "Та асуухаас өмнө мэдээлнэ": [
    "We inform you before you need to ask",
    "在您询问前主动告知",
    "묻기 전에 먼저 알려드립니다"
  ],
  "Монголын бизнес, гэр бүл, хөрөнгийн шийдвэрт зориулсан эрх зүйн баг.": [
    "A legal team for business, family, and asset decisions in Mongolia.",
    "服务蒙古商业、家庭和资产决策的法律团队。",
    "몽골의 비즈니스, 가족 및 자산 결정을 위한 법률팀."
  ],
  "Бэгз Law Firm нь гэрээ байгуулах, компанийн бүтэц цэгцлэх, хөрөнгийн хэлцэл хийх, маргаан шийдвэрлэх үед эрсдэлийг урьдчилан тооцож, ойлгомжтой дараагийн алхам болгож өгдөг.": [
    "BEGZ Law Firm anticipates risk and turns it into clear next steps when drafting contracts, structuring companies, handling asset transactions, and resolving disputes.",
    "BEGZ律师事务所在合同签署、公司结构梳理、资产交易和争议解决中预判风险，并转化为清晰的下一步行动。",
    "BEGZ Law Firm은 계약 체결, 회사 구조 정비, 자산 거래 및 분쟁 해결 과정에서 위험을 미리 파악하고 명확한 다음 단계로 전환합니다."
  ],
  "Бид хуулийн хэллэгийг таны шийдвэр гаргах хэл рүү хөрвүүлж, баримт бүрийг стратегитай нь холбож ажилладаг.": [
    "We translate legal language into decision-making language and connect every document to strategy.",
    "我们将法律语言转化为决策语言，并将每份文件与策略相连接。",
    "법률 용어를 의사결정의 언어로 바꾸고 모든 문서를 전략과 연결합니다."
  ],
  "Анхны уулзалтаар асуудлын хүрээ, нотлох баримт, боломжит хувилбарыг тодорхойлно.": [
    "At the first meeting, we clarify the issue scope, evidence, and possible options.",
    "初次会面时，我们明确问题范围、证据和可能方案。",
    "첫 미팅에서 문제 범위, 증거 및 가능한 선택지를 명확히 합니다."
  ],
  "Төсөл баримт, гэрээ, шаардлага, хариу тайлбарыг нэг стратегийн дагуу бэлдэнэ.": [
    "We prepare drafts, contracts, claims, and responses under one strategy.",
    "我们按照同一策略准备草案、合同、要求和答辩。",
    "초안, 계약서, 요구서 및 답변서를 하나의 전략에 따라 준비합니다."
  ],
  "Танд шийдвэр гаргахад хэрэгтэй эрсдэл, хугацаа, дарааллыг богино тайлангаар өгнө.": [
    "We provide a concise report on the risks, timeline, and sequence you need for decision-making.",
    "我们以简明报告形式提供您决策所需的风险、时间和步骤。",
    "의사결정에 필요한 위험, 일정 및 절차를 간단한 보고서로 제공합니다."
  ],
  "Эрх зүйн сорилтыг ганцаараа үүрэх шаардлагагүй.": [
    "You do not have to face legal challenges alone.",
    "您无需独自承担法律挑战。",
    "법적 어려움을 혼자 감당할 필요는 없습니다."
  ],
  "Компани байгуулах, гэрээ шинэчлэх, хөрөнгө хамгаалах, маргаанд хариу өгөх аль ч үед бид таны зорилго, эрсдэл, боломжийг нэг дор харж ажиллана.": [
    "Whether forming a company, updating a contract, protecting assets, or responding to a dispute, we consider your goals, risks, and opportunities together.",
    "无论是设立公司、更新合同、保护资产还是应对争议，我们都会综合考虑您的目标、风险和机会。",
    "회사 설립, 계약 갱신, 자산 보호, 분쟁 대응 등 어떤 경우에도 귀하의 목표, 위험 및 가능성을 함께 고려합니다."
  ],
  "Хэрэгцээгээ бичих": [
    "Describe your need",
    "填写您的需求",
    "필요 사항 작성"
  ],
  "Үйлчлүүлэгчид биднийг тодорхой, тайван ажилладаг гэж үнэлдэг.": [
    "Clients value us for working clearly and calmly.",
    "客户评价我们工作清晰、沉稳。",
    "의뢰인들은 저희가 명확하고 차분하게 일한다고 평가합니다."
  ],
  "Дараах сэтгэгдлүүд нь mockup-д зориулсан жишээ бөгөөд бодит сайт дээр баталгаажсан review-ээр солих боломжтой.": [
    "The following testimonials are mockup examples and can be replaced with verified reviews on the live site.",
    "以下评价为模型示例，可在正式网站中替换为经确认的真实评价。",
    "다음 후기는 목업용 예시이며 실제 사이트에서는 검증된 리뷰로 교체할 수 있습니다."
  ],
  "“Гэрээний эрсдэлийг ойлгомжтой жагсааж, аль заалтыг яагаад өөрчлөх ёстойг маш тодорхой тайлбарласан.”": [
    "“They clearly listed contract risks and explained exactly which clauses should be changed and why.”",
    "“他们清晰列出合同风险，并明确说明哪些条款为什么需要修改。”",
    "“계약 위험을 명확히 정리하고 어떤 조항을 왜 바꿔야 하는지 매우 분명하게 설명했습니다.”"
  ],
  "Бизнес эрхлэгч": [
    "Business Owner",
    "企业主",
    "사업가"
  ],
  "“Маргаан эхлэхээс өмнө байр сууриа зөв бэлдсэн нь цаг, зардал их хэмнэсэн.”": [
    "“Preparing our position before the dispute escalated saved significant time and cost.”",
    "“在争议扩大前正确准备立场，节省了大量时间和费用。”",
    "“분쟁이 시작되기 전에 입장을 제대로 준비한 것이 시간과 비용을 크게 절약했습니다.”"
  ],
  "Компанийн захирал": [
    "Company Director",
    "公司董事",
    "회사 대표"
  ],
  "“Хуулийн хүнд сэдвийг шийдвэр гаргах түвшинд энгийн болгож өгдөг нь хамгийн их хэрэг болсон.”": [
    "“Their ability to simplify complex legal issues for decision-making was the most helpful.”",
    "“他们能将复杂法律问题简化到便于决策的程度，这最有帮助。”",
    "“어려운 법률 문제를 의사결정 수준으로 쉽게 정리해 준 점이 가장 도움이 되었습니다.”"
  ],
  "Хөрөнгө оруулагч": [
    "Investor",
    "投资者",
    "투자자"
  ],
  "Бидний эрх зүйн үйлчилгээ": [
    "Our Legal Services",
    "我们的法律服务",
    "저희 법률 서비스"
  ],
  "Нэг удаагийн зөвлөгөөнөөс тогтмол legal support хүртэл хэрэгцээнд тань тохирсон байдлаар ажиллана.": [
    "From one-time consultations to ongoing legal support, we work in a way that fits your needs.",
    "从一次性咨询到持续法律支持，我们都可根据您的需求提供服务。",
    "일회성 상담부터 지속적인 법률 지원까지 귀하의 필요에 맞게 업무를 수행합니다."
  ],
  "Бизнесийн эрх зүй": [
    "Business Law",
    "商业法律",
    "비즈니스 법무"
  ],
  "Компани, хувьцаа, бүтэц": [
    "Company, shares, structure",
    "公司、股权、结构",
    "회사, 지분, 구조"
  ],
  "Гэрээ ба хэлцэл": [
    "Contracts and transactions",
    "合同与交易",
    "계약 및 거래"
  ],
  "Маргаан шийдвэрлэлт": [
    "Dispute Resolution",
    "争议解决",
    "분쟁 해결"
  ],
  "Шүүх, арбитр, хэлэлцээр": [
    "Court, arbitration, negotiation",
    "法院、仲裁、谈判",
    "법원, 중재, 협상"
  ],
  "Хөрөнгө ба үл хөдлөх": [
    "Assets and real estate",
    "资产与房地产",
    "자산 및 부동산"
  ],
  "Эзэмшил, эрх, шилжүүлэг": [
    "Ownership, rights, transfers",
    "所有权、权利、转让",
    "소유, 권리, 이전"
  ],
  "Нийцэл ба зөвшөөрөл": [
    "Compliance and permits",
    "合规与许可",
    "컴플라이언스 및 허가"
  ],
  "Өнөөдөр анхны зөвлөгөөгөө товлоё.": [
    "Book your initial consultation today.",
    "今天预约初次咨询。",
    "오늘 초기 상담을 예약하세요."
  ],
  "Доорх мэдээллийг үлдээнэ үү. Бид таны асуудлын чиглэл, эхний баримт бичиг, дараагийн алхмын талаар ажлын нэг өдрийн дотор хариу өгнө.": [
    "Please leave the information below. We will respond within one business day regarding your issue area, initial documents, and next steps.",
    "请留下以下信息。我们将在一个工作日内就您的问题方向、初始文件和下一步作出回复。",
    "아래 정보를 남겨 주세요. 문제 분야, 초기 서류 및 다음 단계에 대해 영업일 기준 1일 이내에 답변드리겠습니다."
  ],
  "Даваа-Баасан, 09:00-18:00": [
    "Monday–Friday, 09:00–18:00",
    "周一至周五，09:00–18:00",
    "월–금, 09:00–18:00"
  ],
  "· Бизнесийн эрх зүй, гэрээ, маргаан": [
    "· Business law, contracts, disputes",
    "· 商业法律、合同、争议",
    "· 비즈니스 법무, 계약, 분쟁"
  ],
  "Бид эхлээд баримтын зураглал гаргаж, дараа нь эрсдэл, хугацаа, боломжит үр дүнг нэг хуудсанд багтаан тодорхойлдог. Ингэснээр та хуулийн асуудлаа таамгаар биш, сонголттойгоор шийднэ.": [
    "We first map the facts, then summarize risks, timing, and possible outcomes on one page. This helps you decide legal issues based on options, not guesswork.",
    "我们先梳理事实图谱，再将风险、时间和可能结果浓缩到一页中。这样，您可以基于选择而非猜测来处理法律问题。",
    "저희는 먼저 사실관계를 정리한 뒤 위험, 일정 및 가능한 결과를 한 페이지에 요약합니다. 이를 통해 법률 문제를 추측이 아니라 선택지를 바탕으로 결정할 수 있습니다."
  ],
  "Mockup дээр энэ товч видео/танилцуулгын хэсэг болж ажиллаж байна. Бодит сайт дээр богино фирмийн танилцуулга эсвэл багийн видео байрлуулж болно.": [
    "In the mockup, this works as a short video/introduction section. On the live site, a brief firm introduction or team video can be placed here.",
    "在模型中，此处作为短视频/介绍区域。正式网站中可放置简短的律所介绍或团队视频。",
    "목업에서는 이 부분이 짧은 영상/소개 섹션으로 작동합니다. 실제 사이트에는 간단한 회사 소개나 팀 영상을 배치할 수 있습니다."
  ],
  "BEGZ цахим туслах": [
    "BEGZ Digital Assistant",
    "BEGZ数字助手",
    "BEGZ 디지털 도우미"
  ],
  "Сайн байна уу. Би BEGZ-ийн AI туслах. Үйлчилгээ, уулзалт товлох, FAQ, холбоо барих мэдээллээр хурдан чиглүүлж өгнө.": [
    "Hello. I am BEGZ’s AI assistant. I can quickly guide you on services, booking a consultation, FAQs, and contact information.",
    "您好。我是BEGZ的AI助手，可以快速引导您了解服务、预约咨询、常见问题和联系方式。",
    "안녕하세요. 저는 BEGZ의 AI 도우미입니다. 서비스, 상담 예약, FAQ 및 연락처 정보를 빠르게 안내해 드립니다."
  ],
  "Манай үндсэн үйлчилгээ нь хууль зүйн зөвлөх үйлчилгээ, шүүхэд төлөөлөх үйлчилгээ, өмгөөллийн үйлчилгээ гэсэн 3 чиглэлтэй. Та сонирхож буй чиглэлээ нээгээд дэлгэрэнгүй мэдээлэл үзэж болно.": [
    "Our main services are legal advisory, court representation, and advocacy. You can open the area you are interested in to view more details.",
    "我们的主要服务包括法律顾问、诉讼代理和律师服务三大方向。您可以打开感兴趣的服务查看详细信息。",
    "주요 서비스는 법률 자문, 법원 대리, 변호 서비스의 세 분야입니다. 관심 있는 분야를 열어 자세한 정보를 확인할 수 있습니다."
  ],
  "Уулзалт товлох болон зөвлөгөө авах бол 8811-9315, 9903-5509 дугаараар холбогдоно уу. Мөн холбоо барих хэсгээр дамжуулан мэдээллээ үлдээж болно.": [
    "To book a meeting or request advice, please call 8811-9315 or 9903-5509. You can also leave your information through the contact section.",
    "如需预约会面或咨询，请拨打8811-9315、9903-5509。您也可以通过联系我们部分留下信息。",
    "미팅 예약이나 상담 요청은 8811-9315 또는 9903-5509로 연락해 주세요. 연락처 섹션을 통해 정보를 남길 수도 있습니다."
  ],
  "Шүүхэд төлөөлөх үйлчилгээ нь нэхэмжлэл, хариу тайлбар, нотлох баримт, шүүх хуралдаанд оролцох зэрэг ажиллагаанд чиглэнэ.": [
    "Court representation covers claims, responses, evidence, and participation in hearings.",
    "诉讼代理服务包括诉状、答辩、证据和庭审参与等工作。",
    "법원 대리 서비스는 청구, 답변, 증거 및 재판 참여 등을 포함합니다."
  ],
  "Өмгөөллийн үйлчилгээ нь таны эрх, хууль ёсны ашиг сонирхлыг хамгаалах, хэрэг маргаанд стратеги боловсруулах, төлөөлөх ажлыг хамарна.": [
    "Advocacy services cover protection of your rights and lawful interests, dispute strategy, and representation.",
    "律师服务包括保护您的权利和合法利益、制定案件争议策略以及代理工作。",
    "변호 서비스는 귀하의 권리와 합법적 이익 보호, 사건 분쟁 전략 수립 및 대리를 포함합니다."
  ],
  "Ерөнхийдөө иргэний үнэмлэх, холбогдох гэрээ, төлбөрийн болон захидал харилцааны баримт, нотлох баримт байвал бэлдээрэй. Яг ямар материал хэрэгтэйг хэргийн төрлөөс хамаарч уулзалтаар тодруулна.": [
    "Generally, prepare your ID, relevant contracts, payment and correspondence records, and any evidence. The exact materials needed will be clarified during the meeting depending on the case type.",
    "通常请准备身份证件、相关合同、付款及往来函件记录以及证据材料。具体所需材料将根据案件类型在会面时确认。",
    "일반적으로 신분증, 관련 계약서, 지급 및 서신 자료, 증거가 있으면 준비해 주세요. 필요한 정확한 자료는 사건 유형에 따라 미팅에서 확인합니다."
  ],
  "Үйлчилгээний төлбөр нь асуудлын төрөл, цар хүрээ, шаардагдах хугацаанаас хамаарна. Нөхцөлийг уулзалтаар тодруулж, тохиролцоно.": [
    "Service fees depend on the type, scope, and required time of the matter. Terms are clarified and agreed during the meeting.",
    "服务费用取决于事项类型、范围和所需时间。具体条件将在会面中确认并协商。",
    "서비스 비용은 사안의 유형, 범위 및 소요 시간에 따라 달라집니다. 조건은 상담에서 확인하고 합의합니다."
  ],
  "Үйлчлүүлэгчийн мэдээллийн нууцлалыг хууль болон мэргэжлийн ёс зүйн хүрээнд хамгаална.": [
    "Client information is protected under law and professional ethics.",
    "客户信息将依据法律和职业伦理予以保护。",
    "의뢰인 정보는 법률과 전문 윤리의 범위 내에서 보호됩니다."
  ],
  "Манай багийн танилцуулга хэсгээс хуульч, өмгөөлөгчдийн чиглэл болон туршлагын мэдээллийг үзэж болно.": [
    "You can view lawyers’ practice areas and experience in the team section.",
    "您可以在团队介绍部分查看律师的专业方向和经验。",
    "팀 소개 섹션에서 변호사들의 전문 분야와 경력을 확인할 수 있습니다."
  ],
  "Байгууллагын замнал, түүхэн товчооны мэдээллийг тусгай хуудсаар оруулсан.": [
    "Information about the firm’s journey and history is available on a dedicated page.",
    "机构发展历程和历史简介已在专门页面中提供。",
    "기관의 여정과 연혁 정보는 별도 페이지에서 확인할 수 있습니다."
  ],
  "Шүүхийн шийдвэрийн тойм мэдээ хэсгээс сонгосон кейсүүдийн дэлгэрэнгүй мэдээлэл үзэж болно.": [
    "You can view details of selected cases in the court decision case reviews section.",
    "您可以在法院判决案例综述部分查看精选案例的详细信息。",
    "법원 판결 사례 리뷰 섹션에서 선정된 사건의 자세한 정보를 확인할 수 있습니다."
  ],
  "Би одоогоор сайтын ерөнхий мэдээллээр чиглүүлдэг туслах байна. Та “үйлчилгээ”, “уулзалт”, “баримт бичиг”, “шүүх”, “өмгөөлөл”, “холбоо барих” гэх мэтээр асуугаарай.": [
    "I currently provide guidance based on the general information on this website. You can ask about “services,” “appointments,” “documents,” “court,” “advocacy,” or “contact.”",
    "我目前根据网站的一般信息提供引导。您可以询问“服务”“预约”“文件”“法院”“律师服务”“联系”等内容。",
    "저는 현재 웹사이트의 일반 정보를 바탕으로 안내하는 도우미입니다. “서비스”, “예약”, “문서”, “법원”, “변호”, “연락처” 등에 대해 질문해 주세요."
  ],
  "Уучлаарай, одоогоор хариу үүсгэж чадсангүй. Та 8811-9315, 9903-5509 дугаараар холбогдоно уу.": [
    "Sorry, I could not generate a response right now. Please contact 8811-9315 or 9903-5509.",
    "抱歉，目前无法生成回复。请联系8811-9315或9903-5509。",
    "죄송합니다. 현재 답변을 생성하지 못했습니다. 8811-9315 또는 9903-5509로 연락해 주세요."
  ]
});

  // Additional QA coverage for remaining visible Mongolian strings.
  Object.assign(D, {
  "Түүхэн товчоо - BEGZ Law Firm": [
    "History - BEGZ Law Firm",
    "发展历程 - BEGZ律师事务所",
    "연혁 - BEGZ Law Firm"
  ],
  "Шүүхийн шийдвэрийн тойм - BEGZ Law Firm": [
    "Court Decision Case Review - BEGZ Law Firm",
    "法院判决案例综述 - BEGZ律师事务所",
    "법원 판결 사례 리뷰 - BEGZ Law Firm"
  ],
  "Шүүхийн шийдвэрийн тойм мэдээ - BEGZ Law Firm": [
    "Court Decision Case Reviews - BEGZ Law Firm",
    "法院判决案例综述 - BEGZ律师事务所",
    "법원 판결 사례 리뷰 - BEGZ Law Firm"
  ],
  "Шүүхийн шийдвэрийн тойм": [
    "Court Decision Case Review",
    "法院判决案例综述",
    "법원 판결 사례 리뷰"
  ],
  "Шийдвэрлэсэн хэрэг, маргааны тойм мэдээ": [
    "Reviews of resolved cases and disputes",
    "已解决案件与争议综述",
    "해결된 사건 및 분쟁 리뷰"
  ],
  "Үйлчлүүлэгчийн хувийн мэдээллийг нууцалсан байдлаар хуулийн ажлын нөхцөл байдал, арга барил, үр дүнг товч танилцуулж байна.": [
    "We briefly present the circumstances, approach, and results of legal work while keeping client personal information confidential.",
    "我们在保护客户个人信息的前提下，简要介绍法律工作的背景、方法和结果。",
    "의뢰인의 개인정보를 비밀로 유지하면서 법률 업무의 상황, 접근 방식 및 결과를 간략히 소개합니다."
  ],
  "тойм мэдээ": [
    "case review",
    "案例综述",
    "사례 리뷰"
  ],
  "Бид хэрхэн ажилладаг вэ?": [
    "How do we work?",
    "我们如何工作？",
    "저희는 어떻게 일하나요?"
  ],
  "Хууль зүйн практик туршлагын эхлэл": [
    "Beginning of Legal Practice Experience",
    "法律实践经验的起点",
    "법률 실무 경험의 시작"
  ],
  "Иргэн, гэр бүл, бизнесийн байгууллагын өдөр тутмын эрх зүйн асуудал, маргаан шийдвэрлэх ажиллагаанд оролцсон туршлага хуримтлагдаж эхэлсэн.": [
    "Experience began to accumulate through work on everyday legal issues and dispute resolution for individuals, families, and business organizations.",
    "通过参与个人、家庭和商业机构的日常法律事务及争议解决工作，实践经验开始逐步积累。",
    "개인, 가족 및 기업의 일상 법률 문제와 분쟁 해결 업무에 참여하며 경험이 축적되기 시작했습니다."
  ],
  "\"Бэгз Ло Консалтинг\" ХХК байгуулагдсан": [
    "\"Begz Lo Consulting\" LLC was established",
    "“Begz Lo Consulting”有限责任公司成立",
    "\"Begz Lo Consulting\" LLC 설립"
  ],
  "Зөвлөх үйлчилгээ, баримт бичгийн хяналт, төлөөлөл, өмгөөллийн чиглэлээр тогтвортой үйл ажиллагаа явуулах байгууллагын суурь тавигдсан.": [
    "The foundation was laid for an organization providing stable services in advisory work, document review, representation, and advocacy.",
    "为在顾问服务、文件审查、代理和律师服务领域持续运营的机构奠定了基础。",
    "자문, 문서 검토, 대리 및 변호 분야에서 안정적으로 활동할 조직의 기반이 마련되었습니다."
  ],
  "Бизнесийн болон иргэний эрх зүйн үйлчилгээ өргөжсөн": [
    "Business and civil law services expanded",
    "商业和民事法律服务扩展",
    "비즈니스 및 민사 법률 서비스 확대"
  ],
  "Гэрээний маргаан, үл хөдлөх хөрөнгө, өв залгамжлал, компанийн өдөр тутмын эрх зүйн зөвлөгөөг илүү системтэй хүргэх аргачлал бүрдсэн.": [
    "A more systematic method was developed for contract disputes, real estate, inheritance, and daily corporate legal advice.",
    "形成了更加系统地提供合同争议、房地产、继承以及公司日常法律咨询的方法。",
    "계약 분쟁, 부동산, 상속 및 회사의 일상 법률 자문을 보다 체계적으로 제공하는 방식이 마련되었습니다."
  ],
  "Шинэ бүтэц, шинэ арга барил": [
    "New structure, new approach",
    "新结构，新方法",
    "새로운 구조와 방식"
  ],
  "Үйлчилгээний ангилал, багийн ажиллах процесс, үйлчлүүлэгчтэй харилцах стандарт, брэндийн өнгө төрхийг шинэчилж, илүү цэгцтэй хэлбэрт шилжүүлсэн.": [
    "Service categories, team workflow, client communication standards, and brand identity were updated into a more organized format.",
    "服务分类、团队工作流程、客户沟通标准和品牌形象得到更新，并转向更加有序的形式。",
    "서비스 분류, 팀 업무 프로세스, 의뢰인 커뮤니케이션 기준 및 브랜드 이미지를 새롭게 정비하여 더 체계적인 형태로 전환했습니다."
  ],
  "Дижитал танилцуулга, нээлттэй мэдээллийн суваг": [
    "Digital presentation and open information channel",
    "数字介绍与开放信息渠道",
    "디지털 소개 및 공개 정보 채널"
  ],
  "Үйлчилгээ, баг, хууль зүйн мэдээлэл, түгээмэл асуулт, шүүхийн шийдвэрийн тоймыг цахим орчинд илүү ойлгомжтой хүргэх суваг хөгжүүлж байна.": [
    "A channel is being developed to present services, team information, legal information, FAQs, and court decision reviews more clearly online.",
    "我们正在建设一个在线渠道，以更清晰地展示服务、团队、法律信息、常见问题和法院判决案例综述。",
    "서비스, 팀, 법률 정보, FAQ 및 법원 판결 리뷰를 온라인에서 더 명확하게 제공하는 채널을 개발하고 있습니다."
  ],
  "Цагдан хорих шийдвэр хуулийн хугацаанд гарах ёстой": [
    "A detention decision must be issued within the legal timeframe",
    "拘留决定应在法定期限内作出",
    "구속 결정은 법정 기한 내에 내려져야 합니다"
  ],
  "Яаралтай тохиолдолд 9903-5509 дугаарт залгана уу. Баривчлагдсан, цагдаад дуудагдсан, шүүх эхлэх гэж байгаа нөхцөлд ажлын цаг харгалзахгүй хариулна.": [
    "In urgent situations, please call 9903-5509. If you are detained, called by the police, or facing an imminent court hearing, we respond regardless of business hours.",
    "紧急情况下，请拨打9903-5509。如遇被拘留、被警方传唤或庭审即将开始等情况，我们不受工作时间限制提供回应。",
    "긴급 상황에서는 9903-5509로 전화해 주세요. 체포, 경찰 출석 요구, 임박한 재판 등 상황에는 업무시간과 관계없이 대응합니다."
  ]
});
  const REV={};
  Object.keys(D).forEach(k=>{D[k].forEach((v,i)=>{REV[String(v).trim()]=k;});});
  const ATTRS=['title','aria-label','placeholder','alt','value'];
  const BLOCK=new Set(['SCRIPT','STYLE','NOSCRIPT','SVG','CANVAS','CODE','PRE']);
  const originalText=new WeakMap(), originalAttr=new WeakMap();
  function current(){const q=new URLSearchParams(location.search).get('lang'); if(['mn','en','zh','ko'].includes(q)){localStorage.setItem('begz-lang',q); return q;} return localStorage.getItem('begz-lang')||'mn'}
  function wrap(out,raw){let a=raw.match(/^\s*/)[0], b=raw.match(/\s*$/)[0]; return a+out+b;}
  function tr(raw,lang){
    if(raw==null) return raw;
    const s=String(raw), t=s.trim(); if(!t) return s;
    let src=D[t]?t:(REV[t]||t);
    if(lang==='mn') return wrap(src,s);
    if(D[src]) return wrap(D[src][IDX[lang]],s);
    let out=src;
    if(/^Шийдвэрлэсэн:\s*(\d{4})$/.test(out)){const y=RegExp.$1; return wrap({en:'Resolved: '+y,zh:'已解决：'+y,ko:'해결: '+y}[lang],s);}
    if(/^Хугацаа:\s*(.+)$/.test(out)){const d=tr(RegExp.$1,lang).trim(); return wrap({en:'Duration: ',zh:'期限：',ko:'기간: '}[lang]+d,s);}
    if(/^[\d.]+$/.test(out) || /^\+?\d[\d\s\-()]+$/.test(out)) return s;
    return wrap(out,s);
  }
  function translateNode(n,lang){
    if(n.nodeType===3){
      if(!originalText.has(n)) originalText.set(n,n.nodeValue);
      const base=originalText.get(n);
      const v=tr(base,lang); if(n.nodeValue!==v) n.nodeValue=v;
    } else if(n.nodeType===1){
      if(BLOCK.has(n.tagName)) return;
      ATTRS.forEach(a=>{ if(n.hasAttribute(a)){ let m=originalAttr.get(n); if(!m){m={}; originalAttr.set(n,m);} if(!(a in m)) m[a]=n.getAttribute(a); const v=tr(m[a],lang); if(n.getAttribute(a)!==v) n.setAttribute(a,v); }});
    }
  }
  function apply(lang){
    lang=lang||current();
    document.documentElement.lang=lang==='mn'?'mn':lang;
    document.querySelectorAll('.flag-btn,.lang-btn').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));
    document.body && (document.body.style.fontFamily='Calibri, Arial, "Microsoft YaHei", "Malgun Gothic", sans-serif');
    if(document.title) document.title=tr(REV[document.title.trim()]||document.title,lang);
    const root=document.body||document.documentElement;
    const w=document.createTreeWalker(root,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT,{acceptNode:n=>{
      const e=n.nodeType===1?n:n.parentElement; return e && [...BLOCK].some(tag=>e.closest(tag.toLowerCase()))?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT;
    }});
    let node; while((node=w.nextNode())) translateNode(node,lang);
  }
  function detectLang(btn){
    if(btn.dataset.lang) return btn.dataset.lang;
    const c=btn.querySelector('.flag-icon'); if(!c) return null;
    if(c.classList.contains('flag-mn')) return 'mn';
    if(c.classList.contains('flag-us')||c.classList.contains('flag-gb')) return 'en';
    if(c.classList.contains('flag-cn')) return 'zh';
    if(c.classList.contains('flag-kr')) return 'ko';
    return null;
  }
  function bind(){
    document.querySelectorAll('.flag-btn,.lang-btn').forEach(btn=>{const l=detectLang(btn); if(!l) return; btn.dataset.lang=l; btn.type='button'; if(!btn.dataset.i18nBound){btn.dataset.i18nBound='1'; btn.addEventListener('click',e=>{e.preventDefault(); window.setLang(l);});}});
  }
  const oldSet=window.setLang;
  window.setLang=function(lang){
    lang=['mn','en','zh','ko'].includes(lang)?lang:'mn';
    if(typeof oldSet==='function' && oldSet!==window.setLang){try{oldSet(lang);}catch(e){}}
    localStorage.setItem('begz-lang',lang); document.dispatchEvent(new CustomEvent('begz:languagechange',{detail:{lang}})); bind(); setTimeout(()=>apply(lang),0);
  };
  function init(){bind(); apply(current()); const obs=new MutationObserver(()=>{clearTimeout(window.__begzI18nT); window.__begzI18nT=setTimeout(()=>{bind();apply(current());},30);}); obs.observe(document.documentElement,{childList:true,subtree:true,attributes:true,attributeFilter:ATTRS});}
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init); else init();
})();
