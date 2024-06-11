"use client";
import Link from "next/link";
import * as React from "react";

import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
export default function MyComponent() {
  return (
    <div className="flex flex-col bg-[#282C33]">
      <div className="flex self-start gap-5 ml-4 max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
          <div className="flex justify-between gap-5 max-md:flex-wrap max-md:max-w-full">
            <div className="flex flex-col self-start bg-[#282C33]">
              <div className="shrink-0 self-center w-0.5 bg-gray-400 h-[191px]" />
              <div className="flex flex-col items-center mt-2">
                <Link
                  href={"https://github.com/PranavThakur07"}
                  target="_blank"
                >
                  <FaGithub className="w-8 cursor-pointer sm:w-16 aspect-square" />
                </Link>
                <Link
                  href={"https://www.linkedin.com/in/pranav-thakur-hawkop/"}
                  target="_blank"
                >
                  <FaLinkedin className="w-8 mt-2 cursor-pointer sm:w-16 aspect-square" />
                </Link>
                <Link
                  href={"https://www.instagram.com/hawkop07/"}
                  target="_blank"
                >
                  <FaInstagram className="w-8 mt-2 cursor-pointer sm:w-16 aspect-square" />
                </Link>
              </div>
            </div>
            <div className="flex flex-col max-md:max-w-full">
              <div className="flex justify-between w-full gap-5 pt-8 pb-2 text-base bg-[#282C33] whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                <div className="flex self-start gap-2 font-bold text-white">
                  <Image
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/888efdb44765f6ba8c61b2088ef66ecd0e4b9b21a1a1eab293da70a86ec86749?apiKey=5413c174b82148c0adc1843a0c9aa9ed&"
                    className="w-4 my-auto shrink-0 aspect-square"
                    width={32}
                    height={32}
                  />
                  <div>Pranav</div>
                </div>
                <div className="flex justify-between gap-5 max-md:flex-wrap">
                  <Link href={"#skills"} className="flex gap-0 font-medium">
                    <div className="text-purple-400">#</div>
                    <div className="text-white">skills</div>
                  </Link>
                  <Link className="flex gap-0" href={"#works"}>
                    <div className="text-purple-400">#</div>
                    <div className="text-gray-400">works</div>
                  </Link>
                  <Link href={"#about-me"} className="flex gap-0">
                    <div className="text-purple-400">#</div>
                    <div className="text-gray-400">about-me</div>
                  </Link>
                  <Link href={"#contacts"} className="flex gap-0">
                    <div className="text-purple-400">#</div>
                    <div className="text-gray-400">contacts</div>
                  </Link>
                </div>
              </div>
              <div className="mt-16 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col self-stretch my-auto text-base font-medium max-md:mt-10 max-md:max-w-full">
                      <div className="text-3xl text-purple-400 max-md:max-w-full">
                        <span className="font-semibold text-[#FFFFFF]">
                          Hi! I'm Pranav
                        </span>
                        <span className="font-semibold"> Thakur</span> <br />
                        <span className="font-semibold">Python</span>
                        <span className="font-semibold text-[#ffffff]">
                          {" "}
                          Developer
                        </span>
                      </div>
                      <div className="mt-10 leading-6 text-gray-400 max-md:mt-10 max-md:max-w-full">
                        My favourite tech includes Python (Scikit-Learn or
                        Pandas) , Django , Flask , HTML&CSS and Many More!
                      </div>
                      <div className="self-start justify-center px-4 py-2 text-white border border-purple-400 border-solid mt-7">
                        <Link href={"mailto:pranavthakur936@gmail.com"}>
                          Contact me!!
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-6/12 ml-5 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col text-base text-white grow max-md:mt-5 max-md:max-w-full">
                      <img
                        loading="lazy"
                        alt="unable to load"
                        src={"/pranav.png"}
                        className="w-[90%] aspect-[-1.22] max-md:max-w-[90%]"
                      />
                      <div className="flex gap-2.5 py-2 mx-9 bg-[#282C33] border border-gray-400 border-solid max-md:mx-2.5">
                        <div className="w-4 h-4 my-auto bg-purple-400 border border-purple-400 border-solid shrink-0" />
                        <div>
                          <span className="font-medium">
                            Currently working on{" "}
                          </span>
                          <span className="font-semibold text-white">
                            Portfolio
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col self-center mt-28 ml-20 max-w-full bg-[#282C33] border border-gray-400 border-solid w-[712px] max-md:mt-10">
            <div className="flex flex-col px-3 max-md:max-w-full">
              <div className="flex justify-center items-center px-2 py-0.5 bg-[#282C33] w-[41px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f613ab49b24d0ec380ce19b72fe860a228fdfcaa6b2810bc32ea8a56f40fcd4?apiKey=5413c174b82148c0adc1843a0c9aa9ed&"
                  className="w-full aspect-[2.27] fill-gray-400"
                />
              </div>
              <div className="mt-4 text-2xl font-medium text-white max-md:max-w-full">
                With great power comes great electricity bill
              </div>
            </div>
            <div className="flex justify-center items-center self-end px-2 py-0.5 mt-4 bg-[#282C33] w-[41px] max-md:mr-2.5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f613ab49b24d0ec380ce19b72fe860a228fdfcaa6b2810bc32ea8a56f40fcd4?apiKey=5413c174b82148c0adc1843a0c9aa9ed&"
                className="w-full aspect-[2.27] fill-gray-400"
              />
            </div>
          </div>
        </div>
        <div className="shrink-0 self-end border border-gray-400 border-solid h-[91px] mt-[672px] w-[82px] max-md:mt-10" />
      </div>
      <div className="flex justify-between w-full gap-5 px-5 mt-32 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col self-start justify-between mt-16 max-md:mt-10">
          <div className="h-1 shrink-0" />
          <div className="h-1 mt-4 shrink-0" />
          <div className="h-1 mt-4 shrink-0" />
          <div className="h-1 mt-4 shrink-0" />
          <div className="h-1 mt-4 shrink-0" />
        </div>
        <div className="flex flex-col max-md:max-w-full" id="works">
          <div className="flex w-full gap-5 font-medium max-md:flex-wrap max-md:max-w-full">
            <div className="flex gap-4 text-3xl whitespace-nowrap max-md:flex-wrap">
              <div className="flex gap-0">
                <div className="text-purple-400">#</div>
                <div className="text-white">projects</div>
              </div>
              <div className="flex-1 h-px my-auto bg-purple-400 shrink-0" />
            </div>
          </div>
          <div className="px-px mt-12 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col text-base border border-gray-400 border-solid max-md:mt-4">
                  <Image
                    src="/eye2.png"
                    className="w-full border-b border-gray-400 border-solid object-cover aspect-[1.64]"
                    width={100}
                    height={100}
                  />
                  <div className="flex gap-2 py-2 text-gray-400 whitespace-nowrap">
                    <div>Python</div>
                    <div>Tkinter</div>
                    <div>Figma</div>
                  </div>
                  <div className="flex flex-col p-4 font-medium border-t border-gray-400 border-solid">
                    <div className="text-2xl text-white">Smart Viscare</div>
                    <div className="mt-4 text-gray-400">
                      SmartVisCare is heath care app created with Python that
                      take care of your eyes at ceratain intervals.
                    </div>
                    <Link
                      href="https://github.com/PranavThakur07/Smart-Viscare"
                      target="_blank"
                      className="flex flex-col justify-center mt-4"
                    >
                      <div className="justify-center px-4 py-2 border border-purple-400 border-solid">
                        Github &lt;~&gt;
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col text-base text-gray-400 border border-gray-400 border-solid grow max-md:mt-4">
                  <Image
                    loading="lazy"
                    src="/resume.png"
                    className="w-full border-b border-gray-400 border-solid object-cover aspect-[1.64]"
                    width={100}
                    height={100}
                  />

                  <div className="flex gap-2 py-2 whitespace-nowrap">
                    <div>Python</div>
                    <div>Pandas</div>

                    <div>NLTK</div>
                  </div>
                  <div className="flex flex-col p-4 font-medium text-white border-t border-gray-400 border-solid">
                    <div className="text-2xl">Resume Parser</div>
                    <div className="mt-4 text-gray-400">
                      A resume parser is a tool that automatically extracts
                      relevant information from resumes, such as contact
                      details, skills, work experience, and education, and
                      organizes it into a structured format.
                    </div>
                    <Link
                      href="https://github.com/PranavThakur07/Resume-Parser-For-Bharat-Intern"
                      target="_blank"
                      className="flex flex-col justify-center mt-4"
                    >
                      <div className="justify-center px-4 py-2 border border-purple-400 border-solid">
                        Github &lt;~&gt;
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col text-base border border-gray-400 border-solid max-md:mt-4">
                  <Image
                    loading="lazy"
                    src="/auto__correct.png"
                    className="w-full border-b border-gray-400 border-solid object-cover  aspect-[1.64]"
                    width={100}
                    height={100}
                  />
                  <div className="flex gap-2 py-2 text-gray-400 whitespace-nowrap">
                    <div>Python</div>

                    <div>PyEnchant</div>
                    <div>SymSpell</div>
                  </div>
                  <div className="flex flex-col p-4 font-medium text-white border-t border-gray-400 border-solid">
                    <div className="text-2xl">Auto Correct Tool</div>
                    <div className="mt-4 text-gray-400">
                      An auto-correct tool automatically identifies and corrects
                      spelling errors and typos in text, improving the overall
                      accuracy and readability.
                    </div>
                    <Link
                      href="https://github.com/PranavThakur07/Auto-Correct-Tool-For-Bharat-Intern"
                      target="_blank"
                      className="flex flex-col justify-center mt-4"
                    >
                      <div className="justify-center px-4 py-2 border border-purple-400 border-solid">
                        Github &lt;~&gt;
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-28 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col max-md:mt-10">
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
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa1940a2168a29dcb4a87a772a3fbef44a7144af28db282510e6df2a9fc79205?apiKey=5413c174b82148c0adc1843a0c9aa9ed&"
                        className="shrink-0 self-end mt-7 max-w-full aspect-square w-[113px]"
                      />
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
                </div>
              </div>
              <div
                className="flex flex-col w-3/5 ml-5 max-md:ml-0 max-md:w-full"
                id="skills"
              >
                <div className="mt-20 grow max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[66%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col text-base whitespace-nowrap max-md:mt-4">
                        <div className="flex gap-4">
                          <div className="flex flex-col flex-1 py-2 border border-gray-400 border-solid">
                            <div className="justify-center font-semibold text-white">
                              Languages
                            </div>
                            <div className="h-px mt-2 bg-gray-400 border border-gray-400 border-solid shrink-0" />
                            <div className="flex flex-col px-2 mt-2 text-gray-400">
                              <div className="flex gap-2">
                                <div>Python</div>
                                <div>JavaScript</div>
                              </div>
                              <div className="flex gap-2 mt-2">
                                <div>C++</div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col flex-1 py-2 border border-gray-400 border-solid">
                            <div className="justify-center font-semibold text-white">
                              Databases
                            </div>
                            <div className="h-px mt-2 bg-gray-400 border border-gray-400 border-solid shrink-0" />
                            <div className="flex flex-col px-2 mt-2 text-gray-400">
                              <div className="flex gap-2">
                                <div>SQLite</div>
                                <div>MySQL</div>
                              </div>
                              <div className="justify-center mt-2">MongoDB</div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col self-end py-2 mt-4 max-w-full border border-gray-400 border-solid w-[179px]">
                          <div className="justify-center font-semibold text-white">
                            Other
                          </div>
                          <div className="h-px mt-2 bg-gray-400 border border-gray-400 border-solid shrink-0" />
                          <div className="flex flex-col px-2 mt-2 text-gray-400">
                            <div className="flex gap-2">
                              <div>HTML</div>
                              <div>CSS</div>
                            </div>
                            <div className="flex gap-2 mt-2">
                              <div>REST</div>
                              <div>Jinja</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[34%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col text-base grow max-md:mt-4">
                        <div className="flex flex-col py-2 mt-4 border border-gray-400 border-solid whitespace-nowrap">
                          <div className="justify-center font-semibold text-white">
                            Frameworks
                          </div>
                          <div className="h-px mt-2 bg-gray-400 border border-gray-400 border-solid shrink-0" />
                          <div className="flex flex-col px-2 mt-2 text-gray-400">
                            <div className="flex gap-3 mt-2">
                              <div>Flask</div>
                              <div>Django</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shrink-0 my-auto border border-gray-400 border-solid h-[155px] w-[68px]" />
      </div>
      <div className="flex justify-between w-full gap-5 px-5 mt-28 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col self-end mt-32 max-md:mt-10">
          <div className="shrink-0 border border-gray-400 border-solid h-[155px]" />
          <div className="flex flex-col justify-between mt-96 max-md:mt-10">
            <div className="h-1 shrink-0" />
            <div className="h-1 mt-5 shrink-0" />
            <div className="h-1 mt-5 shrink-0" />
            <div className="h-1 mt-5 shrink-0" />
            <div className="h-1 mt-5 shrink-0" />
          </div>
        </div>
        <div
          className="flex flex-col self-start text-base font-medium max-md:max-w-full"
          id="about-me"
        >
          <div className="flex gap-4 text-3xl whitespace-nowrap max-md:flex-wrap">
            <div className="flex gap-0">
              <div className="text-purple-400">#</div>
              <div className="text-white">about-me</div>
            </div>
            <div className="flex-1 h-px my-auto bg-purple-400 shrink-0" />
          </div>
          <div className="leading-7 text-gray-400 mt-7 max-md:max-w-full">
            Hello! I'm Pranav Thakur, a passionate Python Software Developer
            currently pursuing my BCA degree at Invertis University, Bareilly.
            As a Google Developers Group New Delhi Intern, I thrive on tackling
            complex coding conundrums and crafting solutions that make an
            impact.
            <br />
            <br />
            🚀 Proud moment: I clinched victory at the Google Cloud AMD Solving
            For India Hackathon, showcasing my knack for innovative
            problem-solving and cloud computing prowess. <br />
            <br />
            When I'm not coding, you'll find me diving into the virtual worlds
            of gaming, an arena where strategy and quick thinking come together.
            Join me on this exciting journey of technology, coding, and gaming!
          </div>

          <div className="flex gap-4 pr-20 text-3xl mt-44 whitespace-nowrap max-md:flex-wrap max-md:pr-5 max-md:mt-10">
            <div className="flex gap-0" id="contacts">
              <div className="text-purple-400">#</div>
              <div className="text-white">contacts</div>
            </div>
            <div className="flex-1 h-px my-auto bg-purple-400 shrink-0" />
          </div>
          <div className="mt-12 text-gray-400 max-md:mt-10 max-md:max-w-full">
            I’m interested in freelance opportunities. However, if you have
            other request or question, don’t hesitate to contact me
          </div>
        </div>
        <div className="flex flex-col max-md:max-w-full">
          <div className="max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[83%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/99c80b1c2636d065c09f743c6dc58cb601e0b38a1f11f459d88db15b71c7814a?apiKey=5413c174b82148c0adc1843a0c9aa9ed&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/99c80b1c2636d065c09f743c6dc58cb601e0b38a1f11f459d88db15b71c7814a?apiKey=5413c174b82148c0adc1843a0c9aa9ed&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/99c80b1c2636d065c09f743c6dc58cb601e0b38a1f11f459d88db15b71c7814a?apiKey=5413c174b82148c0adc1843a0c9aa9ed&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/99c80b1c2636d065c09f743c6dc58cb601e0b38a1f11f459d88db15b71c7814a?apiKey=5413c174b82148c0adc1843a0c9aa9ed&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/99c80b1c2636d065c09f743c6dc58cb601e0b38a1f11f459d88db15b71c7814a?apiKey=5413c174b82148c0adc1843a0c9aa9ed&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/99c80b1c2636d065c09f743c6dc58cb601e0b38a1f11f459d88db15b71c7814a?apiKey=5413c174b82148c0adc1843a0c9aa9ed&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/99c80b1c2636d065c09f743c6dc58cb601e0b38a1f11f459d88db15b71c7814a?apiKey=5413c174b82148c0adc1843a0c9aa9ed&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/99c80b1c2636d065c09f743c6dc58cb601e0b38a1f11f459d88db15b71c7814a?apiKey=5413c174b82148c0adc1843a0c9aa9ed&"
                  className="grow w-full aspect-[0.68] max-md:mt-10"
                />
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
          </div>
          <div className="flex flex-col self-center p-4 mt-48 max-w-full text-base border border-gray-400 border-solid w-[204px] max-md:mt-10">
            <div className="font-semibold text-white">Message me here</div>
            <div className="flex flex-col mt-4 text-gray-400 whitespace-nowrap">
              <Link href="https://discord.com" className="flex gap-1.5">
                <Image
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d6ecbd143aaaf27687cf6732e77292a182c56e1051f07fb86dfcf1ec8926cdc?apiKey=5413c174b82148c0adc1843a0c9aa9ed&"
                  className="w-8 shrink-0 aspect-square"
                  width={32}
                  height={32}
                />
                <div className="my-auto">!Hawk#</div>
              </Link>
              <Link
                href={"mailto:pranavthakur936@gmail.com"}
                className="flex gap-1.5 mt-2"
              >
                <Image
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd18ed8e249c84836dea0a7ed55cde826e9dd7f6ef7e452fc0e9d57f64c69067?apiKey=5413c174b82148c0adc1843a0c9aa9ed&"
                  className="w-8 shrink-0 aspect-square"
                  width={32}
                  height={32}
                />
                <div className="my-auto">pranav@pranav.me</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full px-16 py-8 mt-36 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col w-full max-w-[1027px] max-md:max-w-full">
          <div className="flex justify-between gap-5 px-px max-md:flex-wrap max-md:max-w-full">
            <div className="flex flex-col self-start text-base">
              <div className="flex justify-between gap-5 whitespace-nowrap">
                <div className="flex gap-2.5 font-medium text-white">
                  <Image
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/888efdb44765f6ba8c61b2088ef66ecd0e4b9b21a1a1eab293da70a86ec86749?apiKey=5413c174b82148c0adc1843a0c9aa9ed&"
                    className="w-4 my-auto shrink-0 aspect-square"
                    width={16}
                    height={16}
                  />
                  <div>Pranav</div>
                </div>
              </div>
              <div className="mt-4 text-white">
                Python Software Developer | BCA Student | Google Developers
                Group Intern
              </div>
            </div>
            <div className="flex flex-col text-2xl font-medium text-white whitespace-nowrap">
              <div>Media</div>

              <div className="flex flex-row gap-5 mt-3">
                <Link
                  href={"https://github.com/PranavThakur07"}
                  target="_blank"
                >
                  <FaGithub className="w-[20px]  text-[#ABB2BF]" />
                </Link>
                <Link
                  href={"https://www.linkedin.com/in/pranav-thakur-hawkop/"}
                  target="_blank"
                >
                  <FaLinkedin className="w-[20px]  text-[#ABB2BF]" />
                </Link>
                <Link
                  href={"https://www.instagram.com/hawkop07/"}
                  target="_blank"
                >
                  <FaInstagram className="w-[20px]  text-[#ABB2BF]" />
                </Link>
              </div>
            </div>
          </div>
          <div className="self-center mt-12 text-base text-gray-400 max-md:mt-10">
            © Copyright 2024. Made by Pranav
          </div>
        </div>
      </div>
    </div>
  );
}
