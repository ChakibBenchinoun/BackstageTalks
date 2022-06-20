import clsx from 'clsx'

const sections = [
  {
    id: 1,
    img: 'https://backstagetalks.com/img/backstagetalks_cover_issue_6.png',
    color: '',
  },
  {
    id: 2,
    img: 'https://backstagetalks.com/img/backstagetalks_cover_issue_5.png',
    color: 'bg-teal-500',
  },
  {
    id: 3,
    img: 'https://backstagetalks.com/img/backstagetalks_cover_issue_4.png',
    color: 'bg-orange-500',
  },
  {
    id: 4,
    img: 'https://backstagetalks.com/img/backstagetalks_cover_issue_3.png',
    color: 'bg-amber-400',
  },
  {
    id: 5,
    img: 'https://backstagetalks.com/img/backstagetalks_cover2017.png',
    color: 'bg-blue-700',
  },
  {
    id: 6,
    img: 'https://backstagetalks.com/img/backstagetalks_cover2016_n.png',
    color: 'bg-red-700',
  },
]

export default function Index() {
  return (
    <main className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory">
      {sections.map(section => (
        <div
          key={section.id}
          id={`${section.id}`}
          className={clsx(
            section.color ?? section.color,
            'w-full h-full flex items-center snap-always snap-center',
          )}
        >
          <div className="max-w-lg mx-auto px-12 flex flex-col">
            <img src={section.img} alt="" />
            <p className="text-center text-lg font-semibold">
              Issue #{section.id}
            </p>
            <a
              className={clsx(
                section.color ? 'text-white' : 'text-pink-500',
                'text-center uppercase font-semibold text-sm mt-5',
              )}
              href="/"
            >
              buy here
            </a>
            <p className="text-center mt-5 text-sm font-semibold">
              or in{' '}
              <a
                href="/"
                className={section.color ? 'text-white' : 'text-pink-500'}
              >
                selected stores
              </a>
              .
            </p>
          </div>
        </div>
      ))}
    </main>
  )
}
