"use client"

export default function ServiceCard({ service }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full">
      <div className="text-sage-green mb-4">
        {service.icon}
      </div>
      <h3 className="text-2xl font-playfair font-bold mb-4">{service.title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
      <ul className="space-y-2 mb-6">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-700">
            <span className="w-2 h-2 bg-sage-green rounded-full mr-3"></span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="text-lg font-semibold text-sage-green mb-4">{service.price}</div>
      <button className="w-full bg-sage-green text-white py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300 font-semibold">
        Lihat Detail
      </button>
    </div>
  )
}