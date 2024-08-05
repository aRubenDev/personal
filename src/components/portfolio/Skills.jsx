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
} from "react-icons/tb";

export default function Skills() {
  return (
    <section className="flex flex-col w-full h-screen p-4 items-center justify-center">
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

      <div className="grid grid-cols-2 gap-4 w-4/6">
        <div className="flex flex-col">
          <h2 className="relative flex text-2xl font-bold mb-5">
            Frameworks Web
          </h2>
          <ul className="flex flex-col gap-2">
            <li className="flex flex-col gap-2 p-4 rounded-lg hover:shadow-lg transition-all ease-in-out">
              <div className="flex">
                <TbBrandLaravel className="text-3xl text-[#B2DAB2]" />
                Laravel
              </div>
              <dl>
                <div class="w-[80%] bg-gray-200 rounded-full me-2 p-1">
                  <div
                    class="bg-[#8DBF8D] h-2.5 rounded"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </dl>
            </li>
            <li className="flex flex-col gap-2 p-4 rounded-lg hover:shadow-lg transition-all ease-in-out">
              <div className="flex">
                <TbBrandDrupal className="text-3xl text-[#B2DAB2]" />
                Drupal
              </div>
              <dl>
                <div class="w-[80%] bg-gray-200 rounded-full me-2 p-1">
                  <div
                    class="bg-[#8DBF8D] h-2.5 rounded"
                    style={{ width: "40%" }}
                  ></div>
                </div>
              </dl>
            </li>
            <li className="flex flex-col gap-2 p-4 rounded-lg hover:shadow-lg transition-all ease-in-out">
              <div className="flex">
                <TbBrandWordpress className="text-3xl text-[#B2DAB2]" />
                WordPress
              </div>
              <dl>
                <div class="w-[80%] bg-gray-200 rounded-full me-2 p-1">
                  <div
                    class="bg-[#8DBF8D] h-2.5 rounded"
                    style={{ width: "40%" }}
                  ></div>
                </div>
              </dl>
            </li>
            <li className="flex flex-col gap-2 p-4 rounded-lg hover:shadow-lg transition-all ease-in-out">
              <div className="flex">
                <TbBrandReact className="text-3xl text-[#B2DAB2]" />
                ReactJS
              </div>
              <dl>
                <div class="w-[80%] bg-gray-200 rounded-full me-2 p-1">
                  <div
                    class="bg-[#8DBF8D] h-2.5 rounded"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </dl>
            </li>
            <li className="flex flex-col gap-2 p-4 rounded-lg hover:shadow-lg transition-all ease-in-out">
              <div className="flex">
                <TbBrandNodejs className="text-3xl text-[#B2DAB2]" />
                NodeJS
              </div>
              <dl>
                <div class="w-[80%] bg-gray-200 rounded-full me-2 p-1">
                  <div
                    class="bg-[#8DBF8D] h-2.5 rounded"
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
                <div class="w-[80%] bg-gray-200 rounded-full me-2 p-1">
                  <div
                    class="bg-[#8DBF8D] h-2.5 rounded"
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
                <div class="w-[80%] bg-gray-200 rounded-full me-2 p-1">
                  <div
                    class="bg-[#8DBF8D] h-2.5 rounded"
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
                <div class="w-[80%] bg-gray-200 rounded-full me-2 p-1">
                  <div
                    class="bg-[#8DBF8D] h-2.5 rounded"
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
                <div class="w-[80%] bg-gray-200 rounded-full me-2 p-1">
                  <div
                    class="bg-[#8DBF8D] h-2.5 rounded"
                    style={{ width: "40%" }}
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
