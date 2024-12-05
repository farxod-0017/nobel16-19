import React from "react";

const Applications = () => {
  return (
    <div className="page applic_page">
      <h2>Amaliy Loyihalar</h2>
      <section className="applic1 applicA">
        <h1>Xususiy qamoqxonalar va Hartning nazariyasi</h1>
        <div className="applic1_card">
          <ul>
            <li>Xizmat sifati pasayishi.</li>
            <li>Mahbuslar sonini ko‘paytirishga rag‘bat (foydani oshirish maqsadida).</li>
            <li>Reabilitatsiya dasturlariga e'tiborning kamligi.</li>
          </ul>
          <ul>
            <li>Mahbuslarning xavfsizligi, oziq-ovqat sifati, va reabilitatsiya dasturlari sifatini nazorat qilish uchun ko‘rsatkichlar shartnomaga kiritilishi kerak.</li>
            <li> Mahbuslarning qayta jinoyat sodir etish ko‘rsatkichlarini kamaytirgan kompaniyalar uchun bonus tizimini joriy qilish.</li>
            <li>Xususiy sektor sifat va ijtimoiy maqsadlarga zarar yetkazmasligi uchun davlat muntazam ravishda audit o‘tkazishi kerak.</li>
          </ul>
        </div>
        <div className="core_civic">
          <h4>Ma'lumot o'rnida:</h4>
          <h4>CoreCivic – bu Amerika Qo'shma Shtatlarida xususiy qamoqxona va reabilitatsiya markazlari operatsiyalarini yurituvchi yirik kompaniyadir. U o'zining xizmatlarini davlatlar va federal hukumatga taqdim etadi. Kompaniya 1983 yilda "Corrections Corporation of America" (CCA) nomi bilan tashkil etilgan va 2016 yilda "CoreCivic" nomiga o'zgargan. Bu nom o'zgarishi, kompaniyaning nafaqat qamoqxonalar, balki boshqa ijtimoiy xizmatlar (masalan, reabilitatsiya, migrantlarni ushlab turish markazlari va boshqalar) bilan ham shug'ullanishini ko'rsatadi.</h4>
        </div>
        <img src="https://www.corecivic.com/hubfs/_brand_resources/_logos/CoreCivic-LOGO-RGB.jpg" alt="" />
      </section>
      <section className="applic1 applic2">
        <div className="applic_icon">
          <img src="https://cdn-icons-png.flaticon.com/512/6008/6008445.png" alt="" />
          <h3>Infratuzilma loyihalari:</h3>
        </div>

        <h5>Yo‘l qurilishi va xizmat ko‘rsatish loyihalari (masalan, Avstraliyaning EastLink loyihasi). Shartnoma tuzishda xavf taqsimoti (moliyaviy, operatsion) aniq belgilandi.</h5>
        <div className="applic_icon">
          <img src="https://th.bing.com/th/id/OIP.4glI710Iy01RyawU_4G_CAHaHa?rs=1&pid=ImgDetMain" alt="" />
          <h3>Energetika loyihalari:</h3>
        </div>
        <h5>Hindistondagi quyosh energiyasi fermalari, bu yerda investorlarning foyda olishini davlat kafolatladi.</h5>
        <div className="applic_icon">
          <img src="https://uiteg.com/wp-content/uploads/2021/12/it-management.jpg" alt="" />
          <h3>Menejerlar uchun rag‘bat tizimlari:</h3>
        </div>
        <h5>Google, Apple kabi kompaniyalar menejerlarga aktsiyalarning ulushini beradi, bu ularni kompaniyaning uzoq muddatli o‘sishiga qiziqtiradi.</h5>
        <div className="applic_icon">
          <img src="https://cdn-icons-png.flaticon.com/512/11797/11797761.png" alt="" />
          <h3>Tibbiy sug‘urta tizimlari:</h3>
        </div>
        <h5>AQShdagi Medicaid va Medicare tizimlarini xususiy sug‘urta kompaniyalari bilan optimallashtirish.
          <br />Buyuk Britaniyaning Milliy sog‘liqni saqlash xizmati (NHS) loyihalarida xususiy sektordan foydalanish.
        </h5>
        <div className="applic_icon">
          <img src="https://cdn-icons-png.flaticon.com/512/3778/3778120.png" alt="" />
          <h3> Ta’lim tizimida davlat-xususiy hamkorlik:</h3>
        </div>
        <h5>AQShning New York shahridagi charter maktablar xususiy sektor bilan shartnomalar tuzadi. Unda akademik mustaqillik, moliyaviy davlat taminoti ko'zda tutilgan.</h5>
      </section>
    </div>
  );
};

export default Applications;