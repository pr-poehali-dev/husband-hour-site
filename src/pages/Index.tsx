import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Memory {
  id: number;
  image: string;
  title: string;
  description: string;
  date: string;
}

const Index = () => {
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);

  const memories: Memory[] = [
    {
      id: 1,
      image: '/img/4a210310-3b3f-4d4d-99b9-33faf957f82d.jpg',
      title: 'Первая встреча',
      description: 'Помню этот день как вчера. Твоя улыбка озарила весь мир, и я понял - это судьба.',
      date: '2020'
    },
    {
      id: 2,
      image: '/img/d874cb6b-9d11-4b8c-87ef-6965742e2204.jpg',
      title: 'Наша свадьба',
      description: 'Самый счастливый день в нашей жизни. Мы пообещали быть вместе навсегда.',
      date: '2022'
    },
    {
      id: 3,
      image: '/img/f88e3110-7345-4d3d-b119-3fadaf579b76.jpg',
      title: 'Наш дом',
      description: 'Создавая уют вместе, строя планы на будущее. Каждый уголок полон нашей любви.',
      date: '2023'
    }
  ];

  const timeline = [
    { year: '2020', event: 'Первая встреча в кафе на Невском', icon: 'Heart' },
    { year: '2021', event: 'Первое совместное путешествие в Европу', icon: 'Plane' },
    { year: '2022', event: 'Предложение руки и сердца', icon: 'Ring' },
    { year: '2022', event: 'Свадьба нашей мечты', icon: 'Heart' },
    { year: '2023', event: 'Покупка квартиры и создание семейного гнезда', icon: 'Home' },
    { year: '2024', event: 'Планируем будущее вместе', icon: 'Star' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-light via-background to-muted">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-coral/10 via-turquoise/10 to-navy/10">
        <div className="absolute inset-0 bg-gradient-to-r from-coral/20 to-turquoise/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-heading font-bold text-navy mb-6 tracking-tight">
              Мой муж
            </h1>
            <p className="text-2xl md:text-3xl font-body text-navy/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              История о человеке, который изменил мою жизнь навсегда
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-coral to-turquoise mx-auto mb-12"></div>
            <p className="text-lg font-body text-navy/70 max-w-2xl mx-auto mb-8">
              За один час невозможно рассказать всё, но можно показать самое важное - 
              как любовь меняет нас, делает лучше и дает смысл каждому дню.
            </p>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-navy/60" />
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-6">
              Фотографии и воспоминания
            </h2>
            <p className="text-xl font-body text-navy/70 max-w-3xl mx-auto">
              Каждая фотография - это целая история, полная эмоций и значимых моментов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {memories.map((memory, index) => (
              <Card 
                key={memory.id} 
                className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedMemory(memory)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={memory.image} 
                    alt={memory.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <h3 className="font-heading font-semibold text-lg mb-1">{memory.title}</h3>
                    <p className="font-body text-sm opacity-90">{memory.date}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-xl text-navy mb-2">{memory.title}</h3>
                  <p className="font-body text-navy/70 mb-4 line-clamp-3">{memory.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-body text-coral font-medium">{memory.date}</span>
                    <Button variant="ghost" size="sm" className="text-turquoise hover:text-turquoise-dark hover:bg-turquoise/10">
                      Читать больше
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Selected Memory Modal */}
          {selectedMemory && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedMemory(null)}>
              <Card className="max-w-4xl w-full max-h-[90vh] overflow-auto bg-white animate-scale-in" onClick={(e) => e.stopPropagation()}>
                <div className="relative">
                  <img 
                    src={selectedMemory.image} 
                    alt={selectedMemory.title}
                    className="w-full h-96 object-cover"
                  />
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="absolute top-4 right-4 text-white hover:bg-white/20"
                    onClick={() => setSelectedMemory(null)}
                  >
                    <Icon name="X" size={24} />
                  </Button>
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-3xl font-heading font-bold text-navy">{selectedMemory.title}</h3>
                    <span className="text-lg font-body text-coral font-medium">{selectedMemory.date}</span>
                  </div>
                  <p className="text-lg font-body text-navy/80 leading-relaxed">{selectedMemory.description}</p>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-muted/30 to-accent/10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-6">
              Наша история
            </h2>
            <p className="text-xl font-body text-navy/70 max-w-3xl mx-auto">
              Путешествие длиною в жизнь, которое мы проходим рука об руку
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div 
                key={index} 
                className="flex items-center mb-12 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex-shrink-0 w-24 text-right mr-8">
                  <span className="text-2xl font-heading font-bold text-coral">{item.year}</span>
                </div>
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-coral to-turquoise rounded-full flex items-center justify-center mr-8 shadow-lg">
                  <Icon name={item.icon as any} size={20} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-lg font-body text-navy">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-navy">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <div className="w-16 h-1 bg-gradient-to-r from-coral to-turquoise mx-auto mb-6"></div>
            <p className="text-xl font-body text-white/90 mb-4">
              "Любовь — это не просто чувство, это решение быть рядом каждый день"
            </p>
            <p className="font-body text-white/70">
              Создано с ❤️ для самого важного человека в моей жизни
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;