import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const testimonials = [
  {
    name: 'Emily Carter',
    role: 'Avid Reader',
    image: '/images/emily-carter.jpg',
    feedback:
      'BookShelf has completely transformed my reading experience! The curated collection and personalized recommendations are fantastic. Highly recommended for all book lovers!',
  },
  {
    name: 'Michael Brown',
    role: 'Book Club Member',
    image: '/images/michael-brown.jpg',
    feedback:
      'I love being part of the BookShelf community. The book clubs and exclusive editions make reading even more enjoyable. Truly a gem for bibliophiles!',
  },
  {
    name: 'Sarah Johnson',
    role: 'Literature Enthusiast',
    image: '/images/sarah-johnson.jpg',
    feedback:
      'The quality of books and the customer service at BookShelf are exceptional. I’ve discovered so many amazing titles here. A must-visit for every reader!',
  },
  {
    name: 'David Wilson',
    role: 'Frequent Buyer',
    image: '/images/david-wilson.jpg',
    feedback:
      'BookShelf offers a seamless shopping experience with fast delivery and great discounts. I’m always excited to explore their new arrivals!',
  },
];

const TestimonialSection = () => {
  return (
    <div className="py-12 bg-gray-100 text-gray-800 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6">What Our Readers Say</h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="w-full shadow-md">
            <CardHeader className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={testimonial?.image} className="w-10 h-10" />
              </Avatar>
              <div>
                <CardTitle className="text-lg font-semibold">
                  {testimonial.name}
                </CardTitle>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{testimonial.feedback}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
