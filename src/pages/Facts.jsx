import React from "react";

const Facts = () => {
  return (
    <div className="page page_fact">
      <h2 >Oliver Hart</h2>
      <div className="home1">
        <img
          src="https://th.bing.com/th/id/R.34cc2f8a10bfc3790b755865bf780c85?rik=QdEgwI%2b6uqyNFw&pid=ImgRaw&r=0"
          alt="Qiziqarli faktlar"
          className="hero-image"
        />
        <ul>
          <li>Oliver Hart 1948-yilda Londonda tug‘ilgan.</li>
          <h4>Ta'lim:</h4>
          <li>Kembrij universiteti (bakalavr) <br />
            Warwick universiteti (magistratura) <br />
            Prinston universiteti (PhD, 1974-yil)</li>
          <h4>Ish joylari:</h4>
          <li>
            London iqtisodiyot maktabi (LSE) <br />
            Massachusetts texnologiya instituti (MIT) <br />
            Harvard universiteti (professor)
          </li>
        </ul>
      </div>
      <h2>Bengt Holmström</h2>
      <div className="home1">
        <img
          src="https://th.bing.com/th/id/OIP.HZ3-bKZ-Hen-lTOLaIS8PQHaEK?rs=1&pid=ImgDetMain"
          alt="Qiziqarli faktlar"
          className="hero-image"
        />
        <ul>
          <li>Bengt Holmström 1949-yil 18-aprelda Helsinkidagi shahar, Finlandiya tug‘ilgan .</li>
          <h4>Ta'lim:</h4>
          <li>Helsinkidagi shahar universiteti (matematika bakalavri) <br />
            Stanford universiteti (operatsion tadqiqotlar magistri)<br />
            Stenford universiteti (PhD, 1978-yil, biznes boshqaruv nazariyasi bo‘yicha)</li>
          <h4>Ish joylari:</h4>
          <li>
            Yale universiteti, menejment fakulteti professori <br />
            Massachusetts texnologiya instituti (MIT), iqtisodiyot bo‘yicha professor <br />
          </li>
        </ul>
      </div>


    </div>
  );
};

export default Facts;