const data = {

   global: {
    es: {
      navAbout: 'Sobre mí',
      navResume: 'curriculum',
      footerTranslate: 'Desarrollado por Gabriela',
    },
    en: {
      navAbout: 'About Me',
      navResume: 'Resume' ,
      footerTranslate: 'Created By Gabriela',

    }

  },


  home: {
    es: {
      welcome: '¡Hola! soy Gabriela <strong class="titulo-destaque">Escucho tus necesidades y las transformo en soluciones visuales.</strong>',
      aboutMe: 'Diseñadora gráfica y aprendiz de programación. Me apasiona crear experiencias visuales que conecten con las personas. Bienvenida/o a mi portafolio.',
      socialTitle: 'Accede a mis redes',
    },
    en: {
      welcome: 'Hi! I\'m Gabriela <strong class="titulo-destaque">I listen to your needs and turn them into visual solutions.</strong>',
      aboutMe: 'Graphic designer and programming student. I\'m passionate about creating visual experiences that connect with people. Welcome to my portfolio.',
      socialTitle: 'Connect with me on social media',
    }
  },
  about: {
    es: {
      titleAbout: 'Sobre Mi: <strong class="titulo-destaque"> Diseño con el corazón, programo con propósito.</strong>',
      whoIam: 'Tengo 28 años y soy técnica profesional en diseño gráfico. Domino herramientas como Illustrator y Photoshop, y actualmente estoy expandiendo mi universo creativo aprendiendo programación en Alura Latam.',
      whoIamTwo: 'Estoy explorando HTML, CSS y JavaScript para crear páginas web que sean funcionales, accesibles y visualmente armoniosas. Me interesa unir arte, tecnología y empatía en cada proyecto.',
    },
    en: {
      titleAbout: 'About Me: <strong class="titulo-destaque">Design with heart, code with purpose.</strong>',
      whoIam: 'I am 28 years old and I am a professional technician in graphic design. I master tools like Illustrator and Photoshop, and I am currently expanding my creative universe by learning programming at Alura Latam.',
      whoIamTwo: 'I am exploring HTML, CSS, and JavaScript to create websites that are functional, accessible, and visually harmonious. I am interested in combining art, technology, and empathy in every project.',
    }
  },
  curriculum: {
    es: {
      curriculumTittle: 'curriculum' ,
      Formation: 'Formación: <strong class="titulo-destaque"> Técnica en Diseño Gráfico.</strong>',
      experence: 'Experiencias',
      expeInfo: '<li> Freelancer (2024) - Diseño Digital. </li><li> Digital Samyi (2022 - 2023) - Diseñadora Gráfica - Producción gráfica para impresión. </li> </ul>',
      study: 'Estudios Actuales',
      studyLink:'<li>Principiante en programación: <a href="https://www.linkedin.com/in/gabrielamu%C3%B1ozm/overlay/1758138816831/single-media-viewer/?profileId=ACoAAEu_oKIBfnjwzr1C3PiITlhpgEpcxXbqpiA" target="_blank"> certificación</a> </li>',

    },
    en: {
      curriculumTittle: 'Resume' ,
      Formation: 'Education: <strong class="titulo-destaque"> Technical in Graphic Design.</strong>',
      experence: 'Experience',
      expeInfo: '<li> Freelancer (2024) - Digital design. </li><li> Digital Samyi (2022 - 2023) - Graphic Designer - production for print. </li> </ul>',
      study: 'Current Studies',
      studyLink: '<li> Beginner in programming: <a href="https://www.linkedin.com/in/gabrielamu%C3%B1ozm/overlay/1758138816831/single-media-viewer/?profileId=ACoAAEu_oKIBfnjwzr1C3PiITlhpgEpcxXbqpiA" target="_blank"> certificate</a> </li>',
    }
  }
};

function changeLanguage(page, lang) {
   const content = data.global[lang]; /* Traduccion global para que este en todas las pestanas*/
  document.getElementById("navAbout").textContent = content.navAbout;
  document.getElementById("navResume").textContent = content.navResume;
  document.getElementById("footerTranslate").textContent = content.footerTranslate;


  if (page === 'home') {
    document.getElementById("welcome").innerHTML = data.home[lang].welcome;
    document.getElementById("aboutMe").textContent = data.home[lang].aboutMe;
    document.getElementById("socialTitle").textContent = data.home[lang].socialTitle;
  } else if (page === 'about') {
    document.getElementById("titleAbout").innerHTML = data.about[lang].titleAbout;
    document.getElementById("whoIam").textContent = data.about[lang].whoIam;
    document.getElementById("whoIamTwo").textContent = data.about[lang].whoIamTwo;
  } else if (page === 'curriculum') {
    document.getElementById("curriculumTittle").innerHTML = data.curriculum[lang].curriculumTittle;
    document.getElementById("Formation").innerHTML = data.curriculum[lang].Formation;
    document.getElementById("experence").textContent = data.curriculum[lang].experence;
    document.getElementById("expeInfo").innerHTML = data.curriculum[lang].expeInfo;
    document.getElementById("study").innerHTML = data.curriculum[lang].study;
    document.getElementById("studyLink").innerHTML = data.curriculum[lang].studyLink;
  }
}
