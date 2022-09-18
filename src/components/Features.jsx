import { BoltIcon, ChatBubbleBottomCenterTextIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'

const features = [
    {
        name: 'Connect with experts all over the world',
        description:
            'We provide newbies to connect with experts all over the world. Now connecting with the experts will be just one click away.',
        icon: GlobeAltIcon,
    },
    {
        name: 'Funding for your next big idea',
        description:
            'You share your idea, if your idea attracts any organization they can help you by providing funds or guidance.',
        icon: ScaleIcon,
    },
    {
        name: 'Get your business off the ground',
        description:
            'We promise to give a kickstart to your business by providing guidance from the experts.',
        icon: BoltIcon,
    },
    {
        name: 'Connect with other entrepreneurs',
        description:
            'You can also connect with other entrepreneurs for the purpose of gaining experience, guidance, etc.',
        icon: ChatBubbleBottomCenterTextIcon,
    },
]

export default function Features() {
    return (
        <div className="bg-white py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <p className="mt-2 text-3xl font-semibold leading-8 tracking-tight text-indigo-600 sm:text-4xl">
                        Features
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        We provide following features
                    </p>
                </div>

                <div className="mt-10">
                    <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative">
                                <dt>
                                    <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <p className="ml-16 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
