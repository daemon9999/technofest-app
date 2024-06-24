import { IconType } from "react-icons"
import { GiPlatform } from "react-icons/gi"
import { HiMiniClipboardDocumentList } from "react-icons/hi2"
import { MdSensors } from "react-icons/md"

interface FeautureItem {
    id: number
    title: string
    description: string
    icon: IconType
}

export default function Features() {

    const features: FeautureItem[] = [
        {
            id: 1,
            title: 'Easy-to-use platform',
            description: 'Data from scouting, weather, satellites and sensors comes together on one platform for a complete overview of your fields.',
            icon: GiPlatform
        },
        {
            id: 2,
            title: 'Affordable in-field sensors',
            description: 'Eight times more affordable than competitors, allowing mass deployment for more and accurate information',
            icon: MdSensors 
        },
        {
            id: 3,
            title: 'Effortless API integration',
            description: 'The API easily connects our data and your existing systems for a smooth and easy data transfer process',
            icon: HiMiniClipboardDocumentList 
        }
    ]
    return (
        <section id="features" className="bg-white shadow-inner shadow-600 ">
            <div className="w-[90%] mx-auto container flex flex-col items-center  gap-y-10 py-20 ">
                    <h5 className="uppercase text-4xl font-black tracking-wider font-montserrat text-center gradient-text mr-5">Prominent features</h5>
                    <div className="flex items-center gap-x-10">
                        
                        {features.map((feature: FeautureItem) => (
                            <div className="bg-900 text-400 p-10 flex flex-col w-[calc(33.3%-40px)] gap-y-4 rounded items-center text-center">
                                <span className="rounded-full flex items-center justify-center w-20 h-20 bg-100"><feature.icon size={50}/></span>
                                <h4 className=" font-semibold text-500 text-2xl">{feature.title}</h4>
                                <p className="text-xl">{feature.description}</p>
                            </div>
                        ))}
                    </div>
            </div>

        </section>
    )
}