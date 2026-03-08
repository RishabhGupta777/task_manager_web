export default ({ title, description, iconSvg, bgColor, textColor, rotateClass }) => (
  <div className="text-center p-6 rounded-2xl hover:bg-gray-50 transition duration-300">
    <div className={`${bgColor} h-8 rounded-2xl flex items-center justify-center mx-auto mb-6 transform ${rotateClass}`}>
      {iconSvg}
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);