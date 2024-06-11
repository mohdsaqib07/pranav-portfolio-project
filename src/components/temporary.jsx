import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaGlobe, FaCode, FaUser, FaEnvelope, FaGithub } from 'react-icons/fa';

function Header({ name }) {
  return (
    <header className="flex justify-between w-full gap-5 pt-8 pb-2 text-base bg-gray-800 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
      <div className="flex self-start gap-2 font-bold text-white">
        <FaUser className="my-auto shrink-0" />
        <div>{name}</div>
      </div>
      <nav className="flex justify-between gap-5 max-md:flex-wrap">
        <Link href="#">
          <a className="text-purple-400">#home</a>
        </Link>
        <Link href="#">
          <a className="text-gray-400">#works</a>
        </Link>
        <Link href="#">
          <a className="text-gray-400">#about-me</a>
        </Link>
        <Link href="#">
          <a className="text-gray-400">#contacts</a>
        </Link>
        <div className="flex gap-1 font-semibold text-gray-400">
          <div>EN</div>
          <FaGlobe className="my-auto shrink-0" />
        </div>
      </nav>
    </header>
  );
}

function SocialIcons() {
  return (
    <div className="flex flex-col items-center mt-2">
      <FaGithub className="w-8 h-8" />
      <FaCode className="w-8 h-8 mt-2" />
      <FaEnvelope className="w-8 h-8 mt-2" />
    </div>
  );
}

function ProjectCard({ imageUrl, altText, technologies, title, description, liveLink }) {
  return (
    <article className="flex flex-col text-base border border-gray-400 border-solid max-md:mt-4">
      <Image loading="lazy" src={imageUrl} alt={altText} width={512} height={320} className="w-full border-b border-gray-400 border-solid aspect-[1.64]" />
      <div className="flex gap-2 py-2 text-gray-400 whitespace-nowrap">
        {technologies.map((tech, index) => (
          <div key={index}>{tech}</div>
        ))}
      </div>
      <div className="flex flex-col p-4 font-medium text-white border-t border-gray-400 border-solid">
        <div className="text-2xl">{title}</div>
        <div className="mt-4 text-gray-400">{description}</div>
        {liveLink && (
          <Link href={liveLink}>
            <a className="justify-center px-4 py-2 mt-4 border border-purple-400 border-solid">Live &lt;~&gt;</a>
          </Link>
        )}
      </div>
    </article>
  );
}

export default function MyComponent() {
  const projects = [
    {
      imageUrl: 'http://b.io/ext_21-',
      altText: 'ChertNodes Project Image',
      technologies: ['HTML', 'SCSS', 'Python', 'Flask'],
      title: 'ChertNodes',
      description: 'Minecraft servers hosting',
      liveLink: '#',
    },
    {
      imageUrl: 'http://b.io/ext_22-',
      altText: 'ProtectX Project Image',
      technologies: ['React', 'Express', 'Discord.js', 'Node.js', 'HTML', 'SCSS', 'Python', 'Flask'],
      title: 'ProtectX',
      description: 'Discord anti-crash bot',
      liveLink: '#',
    },
    {
      imageUrl: 'http://b.io/ext_23-',
      altText: 'Kahoot Answers Viewer Project Image',
      technologies: ['CSS', 'Express', 'Node.js'],
      title: 'Kahoot Answers Viewer',
      description: 'Get answers to your kahoot quiz',
      liveLink: '#',
    },
  ];

  return (
    <div className="flex flex-col bg-gray-800">
      <div className="flex self-start gap-5 ml-4 max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
          <div className="flex justify-between gap-5 max-md:flex-wrap max-md:max-w-full">
            <aside className="flex flex-col self-start bg-gray-800">
              <div className="shrink-0 self-center w-0.5 bg-gray-400 h-[191px]" />
              <SocialIcons />
            </aside>
            <div className="flex flex-col max-md:max-w-full">
              <Header name="Elias" />
              <section className="mt-16 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col self-stretch my-auto text-base font-medium max-md:mt-10 max-md:max-w-full">
                      <h1 className="text-3xl text-purple-400 max-md:max-w-full">
                        <span className="font-semibold">Elias is a </span>
                        <span className="font-semibold text-purple-400">web designer</span>
                        <span className="font-semibold"> and </span>
                        <span className="font-semibold text-purple-400">front-end developer</span>
                      </h1>
                      <p className="mt-10 leading-6 text-gray-400 max-md:mt-10 max-md:max-w-full">
                        He crafts responsive websites where technologies meet creativity.
                      </p>
                      <Link href="#contact">
                        <a className="self-start justify-center px-4 py-2 text-white border border-purple-400 border-solid mt-7">Contact me!!</a>
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-col w-6/12 ml-5 max-md:ml-0 max-md:w-full">
                    <figure className="flex flex-col text-base text-white grow max-md:mt-5 max-md:max-w-full">
                      <Image loading="lazy" src="http://b.io/ext_24-" alt="Profile Image" width={600} height={492} className="w-full aspect-[1.22] max-md:max-w-full" />
                      <figcaption className="flex gap-2.5 py-2 mx-9 bg-gray-800 border border-gray-400 border-solid max-md:mx-2.5">
                        <div className="w-4 h-4 my-auto bg-purple-400 border border-purple-400 border-solid shrink-0" />
                        <div>
                          <span className="font-medium">Currently working on </span>
                          <span className="font-semibold text-white">Portfolio</span>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <section className="flex flex-col self-center mt-28 ml-20 max-w-full bg-gray-800 border border-gray-400 border-solid w-[712px] max-md:mt-10">
        <div className="flex flex-col px-3 max-md:max-w-full">
          <div className="flex justify-center items-center px-2 py-0.5 bg-gray-800 w-[41px]">
            <Image loading="lazy" src="http://b.io/ext_25-" alt="" width={41} height={18} className="w-full aspect-[2.27] fill-gray-400" />
          </div>
          <blockquote className="mt-4 text-2xl font-medium text-white max-md:max-w-full">With great power comes great electricity bill</blockquote>
        </div>
        <div className="flex justify-center items-center self-end px-2 py-0.5 mt-4 bg-gray-800 w-[41px] max-md:mr-2.5">
          <Image loading="lazy" src="http://b.io/ext_25-" alt="" width={41} height={18} className="w-full aspect-[2.27] fill-gray-400" />
        </div>
      </section>
      <footer>
        <div className="shrink-0 self-end border border-gray-400 border-solid h-[91px] mt-[672px] w-[82px] max-md:mt-10" />
      </footer>
      <main className="flex justify-between w-full gap-5 px-5 mt-32 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <nav className="flex flex-col self-start justify-between mt-16 max-md:mt-10">
          <div className="h-1 shrink-0" />
          <div className="h-1 mt-4 shrink-0" />
          <div className="h-1 mt-4 shrink-0" />
          <div className="h-1 mt-4 shrink-0" />
          <div className="h-1 mt-4 shrink-0" />
        </nav>
        <section className="flex flex-col max-md:max-w-full">
          <header className="flex w-full gap-5 font-medium max-md:flex-wrap max-md:max-w-full">
            <div className="flex gap-4 text-3xl whitespace-nowrap max-md:flex-wrap">
              <div className="flex gap-0">
                <div className="text-purple-400">#</div>
                <div className="text-white">projects</div>
              </div>
              <div className="flex-1 h-px my-auto bg-purple-400 shrink-0" />
            </div>
            <Link href="#">
              <a className="flex-auto my-auto text-base text-white">View all ~~&gt;</a>
            </Link>
          </header>
          <div className="px-px mt-12 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <section className="mt-28 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
            <header className="flex flex-col max-md:mt-10">
              <div className="flex gap-4 px-px text-3xl font-medium whitespace-nowrap">
                <div className="flex gap-0">
                  <div className="text-purple-400">#</div>
                  <div className="text-white">skills</div>
                </div>
                <div className="flex-1 h-px my-auto bg-purple-400 shrink-0" />
              </div>
              <div className="flex flex-col items-start pl-12 mt-3 max-md:pl-5">
                <div className="flex items-start justify-between gap-5 max-md:pr-5">
                  <div className="flex flex-col self-end justify-between mt-10">
                    <div className="h-1 shrink-0" />
                    <div className="h-1 mt-3 shrink-0" />
                    <div className="h-1 mt-3 shrink-0" />
                    <div className="shrink-0 mt-2.5 h-1" />
                    <div className="h-1 mt-3 shrink-0" />
                  </div>
                  <div className="shrink-0 self-start border border-gray-400 border-solid h-[86px] w-[86px]" />
                </div>
                <div className="flex items-start justify-between gap-5 mt-11 max-md:mt-10">
                  <Image loading="lazy" src="http://b.io/ext_26-" alt="Skill Image" width={113} height={113} className="shrink-0 self-end mt-7 max-w-full aspect-square w-[113px]" />
                  <div className="flex flex-col self-start justify-between">
                    <div className="h-1 shrink-0" />
                    <div className="h-1 mt-3 shrink-0" />
                    <div className="h-1 mt-3 shrink-0" />
                    <div className="shrink-0 mt-2.5 h-1" />
                    <div className="h-1 mt-3 shrink-0" />
                  </div>
                  <div className="shrink-0 my-auto border border-gray-400 border-solid h-[52px] w-[52px]" />
                </div>
              </div>
            </header>
          </div>
          <section className="flex flex-col w-3/5 ml-5 max-md:ml-0 max-md:w-full">
            <div className="mt-20 grow max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <article className="flex flex-col w-[66%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col text-base whitespace-nowrap max-md:mt-4">
                    <div className="flex gap-4">
                      <div className="flex flex-col flex-1 py-2 border border-gray-400 border-solid">
                        <h3 className="justify-center font-semibold text-white">Languages</h3>
                        <div className="h-px mt-2 bg-gray-400 border border-gray-400 border-solid shrink-0" />
                        <div className="flex flex-col px-2 mt-2 text-gray-400">
                          <div className="flex gap-2">
                            <div>TypeScript</div>
                            <div>Lua</div>
                          </div>
                          <div className="flex gap-2 mt-2">
                            <div>Python</div>
                            <div>JavaScript</div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col flex-1 py-2 border border-gray-400 border-solid">
                        <h3 className="justify-center font-semibold text-white">Databases</h3>
                        <div className="h-px mt-2 bg-gray-400 border border-gray-400 border-solid shrink-0" />
                        <div className="flex flex-col px-2 mt-2 text-gray-400">
                          <div className="flex gap-2">
                            <div>SQLite</div>
                            <div>PostgreSQL</div>
                          </div>
                          <div className="justify-center mt-2">Mongo</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col self-end py-2 mt-4 max-w-full border border-gray-400 border-solid w-[179px]">
                      <h3 className="justify-center font-semibold text-white">Other</h3>
                      <div className="h-px mt-2 bg-gray-400 border border-gray-400 border-solid shrink-0" />
                      <div className="flex flex-col px-2 mt-2 text-gray-400">
                        <div className="flex gap-2">
                          <div>HTML</div>
                          <div>CSS</div>
                          <div>EJS</div>
                          <div>SCSS</div>
                        </div>
                        <div className="flex gap-2 mt-2">
                          <div>REST</div>
                          <div>Jinja</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
                <section className="flex flex-col ml-5 w-[34%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col text-base grow max-md:mt-4">
                    <article className="flex flex-col py-2 border border-gray-400 border-solid">
                      <h3 className="justify-center font-semibold text-white whitespace-nowrap">Tools</h3>
                      <div className="h-px mt-2 bg-gray-400 border border-gray-400 border-solid shrink-0" />
                      <div className="flex flex-col px-2 mt-2 text-gray-400">
                        <div className="flex gap-2 whitespace-nowrap">
                          <div>VSCode</div>
                          <div>Neovim</div>
                          <div>Linux</div>
                        </div>
                        <div className="flex gap-2 mt-2 whitespace-nowrap">
                          <div>Figma</div>
                          <div>XFCE</div>
                          <div>Arch</div>
                        </div>
                        <div className="flex gap-3 mt-2">
                          <div>Git</div>
                          <div>Font Awesome</div>
                        </div>
                      </div>
                    </article>
                    <article className="flex flex-col py-2 mt-4 border border-gray-400 border-solid whitespace-nowrap">
                      <h3 className="justify-center font-semibold text-white">Frameworks</h3>
                      <div className="h-px mt-2 bg-gray-400 border border-gray-400 border-solid shrink-0" />
                      <div className="flex flex-col px-2 mt-2 text-gray-400">
                        <div className="flex gap-2">
                          <div>React</div>
                          <div>Vue</div>
                        </div>
                        <div className="flex gap-2 mt-2">
                          <div>Disnake</div>
                          <div>Discord.js</div>
                        </div>
                        <div className="flex gap-3 mt-2">
                          <div>Flask</div>
                          <div>Express.js</div>
                        </div>
                      </div>
                    </article>
                  </div>
                </section>
              </div>
            </div>
          </div>
          </div>
        </section>
        <div className="shrink-0 my-auto border border-gray-400 border-solid h-[155px] w-[68px]" />
      </div>
      <main className="flex justify-between w-full gap-5 px-5 mt-28 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <nav className="flex flex-col self-end mt-32 max-md:mt-10">
          <div className="shrink-0 border border-gray-400 border-solid h-[155px]" />
          <div className="flex flex-col justify-between mt-96 max-md:mt-10">
            <div className="h-1 shrink-0" />
            <div className="h-1 mt-5 shrink-0" />
            <div className="h-1 mt-5 shrink-0" />
            <div className="h-1 mt-5 shrink-0" />
            <div className="h-1 mt-5 shrink-0" />
          </div>
        </nav>
        <section className="flex flex-col self-start text-base font-medium max-md:max-w-full">
          <header className="flex gap-4 text-3xl whitespace-nowrap max-md:flex-wrap">
            <div className="flex gap-0">
              <div className="text-purple-400">#</div>
              <div className="text-white">about-me</div>
            </div>
            <div className="flex-1 h-px my-auto bg-purple-400 shrink-0" />
          </header>
          <div className="leading-7 text-gray-400 mt-7 max-md:max-w-full">
            Hello, i’m Elias!<br /><br />
            I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.<br /><br />
            Transforming my creativity and knowledge into websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
          </div>
          <Link href="#more">
            <a className="self-start justify-center px-4 py-2 mt-8 text-white border border-purple-400 border-solid">Read more -&gt;</a>
          </Link>
          <header className="flex gap-4 pr-20 text-3xl mt-44 whitespace-nowrap max-md:flex-wrap max-md:pr-5 max-md:mt-10">
            <div className="flex gap-0">
              <div className="text-purple-400">#</div>
              <div className="text-white">contacts</div>
            </div>
            <div className="flex-1 h-px my-auto bg-purple-400 shrink-0" />
          </header>
          <div className="mt-12 text-gray-400 max-md:mt-10 max-md:max-w-full">
            I’m interested in freelance opportunities. However, if you have any other request or question, don’t hesitate to contact me.
          </div>
        </section>
      </main>
      <section className="flex flex-col max-md:max-w-full">
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[83%] max-md:ml-0 max-md:w-full">
              <Image loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/99c80b1c2636d065c09f743c6dc58cb601e0b38a1f11f459d88db15b71c7814a?apiKey=5413c174b82148c0adc1843a0c9aa9ed&" alt="Contact Image" width={594} height={402} className="grow w-full aspect-[0.68] max-md:mt-10" />
            </div>
            <div className="flex flex-col ml-5 w-[17%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col justify-between mt-72 max-md:mt-10">
                <div className="h-1 shrink-0" />
                <div className="h-1 mt-5 shrink-0" />
                <div className="h-1 mt-5 shrink-0" />
                <div className="h-1 mt-5 shrink-0" />
                <div className="h-1 mt-5 shrink-0" />
              </div>
            </div>
          </div>
          <div className="flex flex-col self-center p-4 mt-48 max-w-full text-base border border-gray-400 border-solid w-[204px] max-md:mt-10">
            <div className="font-semibold text-white">Message me here</div>
            <div className="flex flex-col mt-4 text-gray-400 whitespace-nowrap">
              <div className="flex gap-1.5">
                <FaDiscord className="w-8 h-8 shrink-0 aspect-square" />
                <div className="my-auto">!Elias#3519</div>
              </div>
              <div className="flex gap-1.5 mt-2">
                <FaEnvelope className="w-8 h-8 shrink-0 aspect-square" />
                <div className="my-auto">elias@elias.me</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center w-full px-16 py-8 mt-36 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col w-full max-w-[1027px] max-md:max-w-full">
          <div className="flex justify-between gap-5 px-px max-md:flex-wrap max-md:max-w-full">
            <div className="flex flex-col self-start text-base">
              <div className="flex justify-between gap-5 whitespace-nowrap">
                <div className="flex gap-2.5 font-medium text-white">
                  <FaUser className="w-4 my-auto shrink-0 aspect-square" />
                  <div>Elias</div>
                </div>
                <div className="text-gray-400">elias@elias-dev.ml</div>
              </div>
              <div className="mt-4 text-white">Web designer and front-end developer</div>
            </div>
            <div className="flex flex-col text-2xl font-medium text-white whitespace-nowrap">
              <div>Media</div>
              <Image loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c90cb3b2c0b91bc7deee4e1668e3d14138c63e0c6566a12873841993b9ce03ad?apiKey=5413c174b82148c0adc1843a0c9aa9ed&" alt="Media Image" width={97} height={28} className="self-center mt-3 w-28 aspect-[3.45]" />
            </div>
          </div>
          <div className="self-center mt-12 text-base text-gray-400 max-md:mt-10">© Copyright 2022. Made by Elias</div>
        </div>
      </section>
    </div>
  );
}