import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Reyv</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Нейросеть для проверки цифрового обмена на честность
          </p>
          <div className="space-x-4">
            <Link 
              href="/analyze" 
              className="bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Проанализировать обмен
            </Link>
            <Link 
              href="#how-it-works" 
              className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              Как это работает
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Как работает Reyv</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Загрузите детали обмена',
                description: 'Укажите, какие цифровые активы вы обмениваете и что получаете взамен.'
              },
              {
                title: 'Анализ на честность',
                description: 'Наша нейросеть проверит условия обмена на предмет возможных рисков и несоответствий.'
              },
              {
                title: 'Получите отчёт',
                description: 'Подробный отчёт о результатах проверки с рекомендациями по безопасному обмену.'
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Готовы проверить свой обмен?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Обеспечьте безопасность ваших сделок с цифровыми активами
          </p>
          <Link 
            href="/analyze" 
            className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Начать анализ
          </Link>
        </div>
      </section>
    </main>
  );
}
