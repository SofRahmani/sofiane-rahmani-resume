import Link from 'next/link'


export default function Works() {
  return (
    <section className=' flex flex-col md:flex-row mx-auto w-full justify-center items-start gap-10 p-6 '>
      <h3 className=' font-medium text-2xl lg:text-3xl text-[#6c7781] tracking-tight '>
        Emplois
      </h3>
      <article className=' w-full md:w-3/5 '>
        <header>
          <Link href={'https://www.cegedim-sante.com/'}>
            <h4 className=' font-medium text-xl lg:text-2xl text-primary '>Cegedim Sante</h4>
          </Link>
          <div className=' w-full md:w-1/2 my-2 text-sm lg:text-md text-default-600 max-w-full -mt-[0px] '>Leader mondiale dans le secteur medical</div>
        </header>

        <div className=' flex flex-col gap-6 mt-6 justify-start items-start '>
          <div>
            <div className=' mb-2 '>
              <h5 className=' font-medium text-lg lg:text-xl '>Expert Logiciel / Référant technique</h5>
              <div className=' text-[#6c7781] text-sm '>
                <div className=' flex flex-row gap-1 '>
                  <time dateTime='2022-08-01'>Août 2017</time>
                  <span>–</span>
                  <time dateTime='2024-01-01'>Janvier 2024</time>
                </div>
                <p>Rodez, FR</p>
              </div>
            </div>
            <p className=' text-justify mb-2 '>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia culpa quae obcaecati reprehenderit iure, placeat consequuntur velit quidem, repudiandae minima tenetur corrupti ex incidunt maiores, fuga beatae similique itaque magni?
            </p>
            <ul className='  '>
              <li>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, dolor?
                </p>
              </li>
              <li>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, dolor?
                </p>
              </li>
              <li>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, dolor?
                </p>
              </li>
            </ul>
          </div>
          <div>
            <div className=' mb-2 '>
              <h5 className=' font-medium text-lg lg:text-xl '>Technicien Senior / Spécialiste ingénierie </h5>
              <div className=' text-[#6c7781] text-sm '>
                <div className=' flex flex-row gap-1 '>
                  <time dateTime='2018-01-01'>Janvier 2018</time>
                  <span>–</span>
                  <time dateTime='2022-08-01'>Aout 2022</time>
                </div>
                <p>Rodez, FR</p>
              </div>
            </div>
            <p className=' text-justify mb-2 '>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia culpa quae obcaecati reprehenderit iure, placeat consequuntur velit quidem, repudiandae minima tenetur corrupti ex incidunt maiores, fuga beatae similique itaque magni?
            </p>
            <ul className='  '>
              <li>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, dolor?
                </p>
              </li>
              <li>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, dolor?
                </p>
              </li>
              <li>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, dolor?
                </p>
              </li>
            </ul>
          </div>
          <div>
            <div className=' mb-2 '>
              <h5 className=' font-medium text-lg lg:text-xl '>Testeur QA</h5>
              <div className=' text-[#6c7781] text-sm '>
                <div className=' flex flex-row gap-1 '>
                  <time dateTime='2017-11-01'>Novembre 2017</time>
                  <span>–</span>
                  <time dateTime='2018-01-01'>Janvier 2018</time>
                </div>
                <p>Rodez, FR</p>
              </div>
            </div>
            <p className=' text-justify mb-2 '>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia culpa quae obcaecati reprehenderit iure, placeat consequuntur velit quidem, repudiandae minima tenetur corrupti ex incidunt maiores, fuga beatae similique itaque magni?
            </p>
            <ul className='  '>
              <li>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, dolor?
                </p>
              </li>
              <li>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, dolor?
                </p>
              </li>
              <li>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, dolor?
                </p>
              </li>
            </ul>
          </div>
          <div>
            <div className=' mb-2 '>
              <h5 className=' font-medium text-lg lg:text-xl '>Technicien Junior</h5>
              <div className=' text-[#6c7781] text-sm '>
                <div className=' flex flex-row gap-1 '>
                  <time dateTime='2017-02-01'>Fevrier 2017</time>
                  <span>–</span>
                  <time dateTime='2017-11-01'>Novembre 2017</time>
                </div>
                <p>Rodez, FR</p>
              </div>
            </div>
            <p className=' text-justify mb-2 '>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia culpa quae obcaecati reprehenderit iure, placeat consequuntur velit quidem, repudiandae minima tenetur corrupti ex incidunt maiores, fuga beatae similique itaque magni?
            </p>
            <ul className='  '>
              <li>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, dolor?
                </p>
              </li>
              <li>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, dolor?
                </p>
              </li>
              <li>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, dolor?
                </p>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </section>
  );
}