import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'Reyv - Проверка честности цифрового обмена',
  description: 'Нейросеть для проверки цифрового обмена на честность',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <header className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              Reyv
            </Link>
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <Link href="/" className="text-gray-700 hover:text-primary transition-colors">
                    Главная
                  </Link>
                </li>
                <li>
                  <Link href="/analyze" className="text-gray-700 hover:text-primary transition-colors">
                    Анализ обмена
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        
        {children}
        
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <h2 className="text-2xl font-bold mb-2">Reyv</h2>
                <p className="text-gray-400">Проверка честности цифрового обмена</p>
              </div>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Условия использования
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Политика конфиденциальности
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Контакты
                </a>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
              © {new Date().getFullYear()} Reyv. Все права защищены.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
