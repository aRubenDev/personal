import {
  TbBrandLaravel,
  TbBrandDrupal,
  TbBrandWordpress,
  TbBrandReact,
  TbBrandNodejs,
  TbBrandPhp,
  TbBrandJavascript,
  TbBrandCSharp,
  TbSql,
  TbBrandAws,
  TbBrandGoogle
} from "react-icons/tb";
import { DiDotnet, DiGit, DiGithubBadge, DiBootstrap, DiJenkins } from "react-icons/di";

export default function Skills() {
  return (
    <section className="flex flex-col w-full p-4 items-center">
      <div className="flex flex-col text-center items-center">
        <h1 className="relative flex text-5xl font-bold my-5 mb-16 text-center">
          Habilidades
          <span className="absolute -bottom-5 p-1 w-20 h-1 bg-[#B2DAB2] rounded-full"></span>
        </h1>
        <p className="text-lg -mt-5 mb-10 italic">
          A continuación se muestran algunas de las tecnologías con las que he
          trabajado.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 w-4/6 grid-rows-2 space-y-4">
        <div className="flex flex-col">
          <h2 className="relative flex text-2xl font-bold mb-5">
            Frameworks Web
          </h2>
          <ul className="flex flex-col gap-2">
            <li className="flex flex-col gap-2 p-4 rounded-lg hover:shadow-lg transition-all ease-in-out">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <TbBrandLaravel className="text-3xl text-[#B2DAB2]" />
                  Laravel
                </div>
                <span className="inline-flex items-center rounded-md bg-[#B2DAB2] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-green-500/10">
                  80%
                </span>
              </div>
              <dl>
                <div className="w-[80%] bg-gray-200 rounded-full me-2 p-1">
                  <div
                    className="bg-[#8DBF8D] h-2.5 rounded"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </dl>
            </li>
            <li className="flex flex-col gap-2 p-4 rounded-lg hover:shadow-lg transition-all ease-in-out">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <TbBrandDrupal className="text-3xl text-[#B2DAB2]" />
                  Drupal
                </div>
                <span className="inline-flex items-center rounded-md bg-[#B2DAB2] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-green-500/10">
                  40%
                </span>
              </div>
              <dl>
                <div className="w-[80%] bg-gray-200 rounded-full me-2 p-1">
                  <div
                    className="bg-[#8DBF8D] h-2.5 rounded"
                    style={{ width: "40%" }}
                  ></div>
                </div>
              </dl>
            </li>
            <li className="flex flex-col gap-2 p-4 rounded-lg hover:shadow-lg transition-all ease-in-out">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <TbBrandWordpress className="text-3xl text-[#B2DAB2]" />
                  WordPress
                </div>
                <span className="inline-flex items-center rounded-md bg-[#B2DAB2] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-green-500/10">
                  40%
                </span>
              </div>
              <dl>
                <div className="w-[80%] bg-gray-200 rounded-full me-2 p-1">
                  <div
                    className="bg-[#8DBF8D] h-2.5 rounded"
                    style={{ width: "40%" }}
                  ></div>
                </div>
              </dl>
            </li>
            <li className="flex flex-col gap-2 p-4 rounded-lg hover:shadow-lg transition-all ease-in-out">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <TbBrandReact className="text-3xl text-[#B2DAB2]" />
                  ReactJS
                </div>
                <span className="inline-flex items-center rounded-md bg-[#B2DAB2] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-green-500/10">
                  60%
                </span>
              </div>
              <dl>
                <div className="w-[80%] bg-gray-200 rounded-full me-2 p-1">
                  <div
                    className="bg-[#8DBF8D] h-2.5 rounded"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </dl>
            </li>
            <li className="flex flex-col gap-2 p-4 rounded-lg hover:shadow-lg transition-all ease-in-out">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <TbBrandNodejs className="text-3xl text-[#B2DAB2]" />
                  NodeJS
                </div>
                <span className="inline-flex items-center rounded-md bg-[#B2DAB2] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-green-500/10">
                  60%
                </span>
              </div>
              <dl>
                <div className="w-[80%] bg-gray-200 rounded-full me-2 p-1">
                  <div
                    className="bg-[#8DBF8D] h-2.5 rounded"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </dl>
            </li>
            <li className="flex flex-col gap-2 p-4 rounded-lg hover:shadow-lg transition-all ease-in-out">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <DiDotnet className="text-3xl text-[#B2DAB2]" />
                  .NET Core
                </div>
                <span className="inline-flex items-center rounded-md bg-[#B2DAB2] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-green-500/10">
                  40%
                </span>
              </div>
              <dl>
                <div className="w-[80%] bg-gray-200 rounded-full me-2 p-1">
                  <div
                    className="bg-[#8DBF8D] h-2.5 rounded"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </dl>
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h2 className="relative flex text-2xl font-bold mb-5">
            Lenguajes de Programación
          </h2>
          <ul className="flex flex-col gap-2">
            <li className="flex flex-col gap-2 p-4 rounded-lg hover:shadow-lg transition-all ease-in-out">
              <div className="flex">
                <TbBrandPhp className="text-3xl text-[#B2DAB2]" />
                PHP
              </div>
              <dl>
                <div className="w-[80%] bg-gray-200 rounded-full me-2 p-1">
                  <div
                    className="bg-[#8DBF8D] h-2.5 rounded"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </dl>
            </li>
            <li className="flex flex-col gap-2 p-4 rounded-lg hover:shadow-lg transition-all ease-in-out">
              <div className="flex">
                <TbBrandCSharp className="text-3xl text-[#B2DAB2]" />C / C++ /
                C#
              </div>
              <dl>
                <div className="w-[80%] bg-gray-200 rounded-full me-2 p-1">
                  <div
                    className="bg-[#8DBF8D] h-2.5 rounded"
                    style={{ width: "40%" }}
                  ></div>
                </div>
              </dl>
            </li>
            <li className="flex flex-col gap-2 p-4 rounded-lg hover:shadow-lg transition-all ease-in-out">
              <div className="flex">
                <TbBrandJavascript className="text-3xl text-[#B2DAB2]" />
                JavaScript
              </div>
              <dl>
                <div className="w-[80%] bg-gray-200 rounded-full me-2 p-1">
                  <div
                    className="bg-[#8DBF8D] h-2.5 rounded"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </dl>
            </li>
            <li className="flex flex-col gap-2 p-4 rounded-lg hover:shadow-lg transition-all ease-in-out">
              <div className="flex">
                <TbSql className="text-3xl text-[#B2DAB2]" />
                SQL
              </div>
              <dl>
                <div className="w-[80%] bg-gray-200 rounded-full me-2 p-1">
                  <div
                    className="bg-[#8DBF8D] h-2.5 rounded"
                    style={{ width: "40%" }}
                  ></div>
                </div>
              </dl>
            </li>
          </ul>
        </div>

        <div className="flex flex-col col-span-2">
          <h2 className="relative flex text-2xl font-bold mb-5">Otros</h2>
          <ul className="grid grid-cols-2 gap-2">
            <li className="flex flex-col gap-2 p-4 rounded-lg hover:shadow-lg transition-all ease-in-out">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <DiGit className="text-3xl text-[#B2DAB2]" />
                  Git
                </div>
                <span className="inline-flex items-center rounded-md bg-[#B2DAB2] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-green-500/10">
                  80%
                </span>
              </div>
              <dl>
                <div className="w-[80%] bg-gray-200 rounded-full me-2 p-1">
                  <div
                    className="bg-[#8DBF8D] h-2.5 rounded"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </dl>
            </li>
            <li className="flex flex-col gap-2 p-4 rounded-lg hover:shadow-lg transition-all ease-in-out">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <DiGithubBadge className="text-3xl text-[#B2DAB2]" />
                  GitHub
                </div>
                <span className="inline-flex items-center rounded-md bg-[#B2DAB2] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-green-500/10">
                  80%
                </span>
              </div>
              <dl>
                <div className="w-[80%] bg-gray-200 rounded-full me-2 p-1">
                  <div
                    className="bg-[#8DBF8D] h-2.5 rounded"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </dl>
            </li>
            <li className="flex flex-col gap-2 p-4 rounded-lg hover:shadow-lg transition-all ease-in-out">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <DiBootstrap className="text-3xl text-[#B2DAB2]" />
                  Bootstrap
                </div>
                <span className="inline-flex items-center rounded-md bg-[#B2DAB2] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-green-500/10">
                  60%
                </span>
              </div>
              <dl>
                <div className="w-[80%] bg-gray-200 rounded-full me-2 p-1">
                  <div
                    className="bg-[#8DBF8D] h-2.5 rounded"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </dl>
            </li>
            <li className="flex flex-col gap-2 p-4 rounded-lg hover:shadow-lg transition-all ease-in-out">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <TbBrandAws className="text-3xl text-[#B2DAB2]" />
                  AWS
                </div>
                <span className="inline-flex items-center rounded-md bg-[#B2DAB2] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-green-500/10">
                  40%
                </span>
              </div>
              <dl>
                <div className="w-[80%] bg-gray-200 rounded-full me-2 p-1">
                  <div
                    className="bg-[#8DBF8D] h-2.5 rounded"
                    style={{ width: "40%" }}
                  ></div>
                </div>
              </dl>
            </li>
            <li className="flex flex-col gap-2 p-4 rounded-lg hover:shadow-lg transition-all ease-in-out">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <TbBrandGoogle className="text-3xl text-[#B2DAB2]" />
                  Google Cloud
                </div>
                <span className="inline-flex items-center rounded-md bg-[#B2DAB2] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-green-500/10">
                  60%
                </span>
              </div>
              <dl>
                <div className="w-[80%] bg-gray-200 rounded-full me-2 p-1">
                  <div
                    className="bg-[#8DBF8D] h-2.5 rounded"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </dl>
            </li>
            <li className="flex flex-col gap-2 p-4 rounded-lg hover:shadow-lg transition-all ease-in-out">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <DiJenkins className="text-3xl text-[#B2DAB2]" />
                  Jenkins
                </div>
                <span className="inline-flex items-center rounded-md bg-[#B2DAB2] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-green-500/10">
                  40%
                </span>
              </div>
              <dl>
                <div className="w-[80%] bg-gray-200 rounded-full me-2 p-1">
                  <div
                    className="bg-[#8DBF8D] h-2.5 rounded"
                    style={{ width: "40%" }}
                  ></div>
                </div>
              </dl>
            </li>
            <li className="flex flex-col gap-2 p-4 rounded-lg hover:shadow-lg transition-all ease-in-out">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <TbBrandPhp className="text-3xl text-[#B2DAB2]" />
                  PHPUnit
                </div>
                <span className="inline-flex items-center rounded-md bg-[#B2DAB2] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-green-500/10">
                  60%
                </span>
              </div>
              <dl>
                <div className="w-[80%] bg-gray-200 rounded-full me-2 p-1">
                  <div
                    className="bg-[#8DBF8D] h-2.5 rounded"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </dl>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
