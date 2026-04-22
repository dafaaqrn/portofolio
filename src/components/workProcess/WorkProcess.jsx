import WorkSteps from "./WorkSteps";
import {
  CodeBracketSquareIcon,
  DevicePhoneMobileIcon,
  RocketLaunchIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const workStepData = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Membangun website yang terstruktur dengan baik untuk memastikan performa optimal dan pengalaman pengguna yang nyaman.",
    icon: CodeBracketSquareIcon,
    },
  {
    id: 2,
    title: "Mobile App Development",
    description:
      "Mengembangkan aplikasi mobile yang intuitif dan efisien, dengan fokus pada kemudahan penggunaan dan performa di berbagai perangkat.",
    icon: DevicePhoneMobileIcon,
  },
  {
    id: 3,
    title: "Launch",
    description:
      "Mempersiapkan dan merilis produk digital dengan perencanaan matang agar berjalan stabil, aman, dan siap digunakan oleh pengguna.",
    icon: RocketLaunchIcon,
  },
  {
    id: 4,
    title: "Team Collaboration",
    description:
      "Bekerja secara kolaboratif dalam tim untuk menciptakan solusi yang efektif melalui komunikasi yang jelas dan koordinasi yang solid.",
    icon: UserGroupIcon,
  },
];

const WorkProcess = () => {
  return (
    <div
      className="content grid xl:grid-cols-2 xl:items-center px-2 py-5 md:py-10 lg:py-25 xl:py-35 max-xxl:px-4"
      id="work-process"
    >
      <div className="lg:pe-10 xl:pe-35.75 max-xs:mb-3 max-xl:mb-8">
        <p className="section-title max-xl:text-center">Work Process</p>
        <p className="mt-6 mb-4 md:text-[18px] text-sm font-normal max-xl:text-center text-gray-500">
          Didorong oleh pemikiran desain dan diperkuat dengan kemampuan teknis, 
          saya membangun aplikasi dan sistem digital yang efisien, intuitif, 
          dan berorientasi pada solusi nyata. 

        </p>
        <p className="mt-6 md:text-[18px] text-sm font-normal max-xl:text-center text-gray-500">
          Saya menggabungkan struktur kode 
          yang rapi dengan pendekatan yang berfokus pada pengguna untuk menciptakan 
          pengalaman yang optimal dan fungsional.
        </p>
      </div>

      <div className="grid xs:grid-cols-2 justify-end my-2 w-fit mx-auto ">
        {workStepData.map((data, index) => {
          return (
            <WorkSteps
              data={data}
              style={`max-xs:mt-3 p-4 sm:p-8 bg-white aspect-auto sm:max-w-78 ${
                index % 2 == 1 ? "xs:ms-3 xs:mt-6 " : "xs:mb-6"
              }`}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WorkProcess;
