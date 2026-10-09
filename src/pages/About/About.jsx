import Banner from '../../assets/banner_about_us.png';



const About = () => {
  return (
    <div className="flex flex-col mx-16">
      <h1 className="text-4xl font-semibold my-6">About us</h1>
      <img src={Banner} alt="about us" className='h-105 rounded-3xl'/>
      <p className="mt-6 text-justify text-xl">
      Bienvenido a <span className="font-bold">Filadelfia Blog</span>, un espacio digital donde la fe, la esperanza y el amor de Dios se encuentran con la vida cotidiana. Nacimos con el 
      deseo de compartir la Palabra de Dios de una manera clara, cercana y relevante. Aquí no buscamos imponer ideas, sino sembrar esperanza, 
      animar corazones y recordar que nadie camina solo.
      </p>

      <div className="space-y-10">
        <h1 className="text-3xl font-semibold mt-10">Nuestra misión</h1>
        <p className="mt-6 text-justify text-xl">Ayudarte a conocer más a Dios a través de artículos, devocionales, reflexiones bíblicas y recursos que fortalezcan tu fe. Queremos ser un lugar donde encuentres descanso para tu alma, dirección para tus decisiones y comunidad para tu caminar espiritual.</p>
      </div>
      
      <div className="space-y-10">
        <h1 className="text-3xl font-semibold mt-10">Nuestra fé</h1>
        <p className="mt-6 text-justify text-xl">Creemos en Jesucristo como Señor y Salvador. Creemos que la Biblia es la Palabra de Dios, inspirada y útil para enseñar, corregir y guiar. Creemos en el poder del Espíritu Santo para transformar vidas y en la importancia de una comunidad que se ama y se sirve.</p>
      </div>
      
      <div className="space-y-10">
        <h1 className="text-3xl font-semibold mt-10">Nuestro compromiso</h1>
        <p className="mt-6 text-justify text-xl">Escribir con verdad, humildad y amor. No somos perfectos; somos peregrinos aprendiendo a caminar con Dios. Si en algún momento nuestras palabras te acercan más a Él, entonces este espacio habrá cumplido su propósito.

Gracias por visitarnos. Te invitamos a leer, compartir y ser parte de esta comunidad. Que Dios te bendiga y te guarde.

“Lámpara es a mis pies tu palabra, y lumbre a mi camino.” — Salmo 119:105</p>
      </div>
    </div>
  )
}

export default About