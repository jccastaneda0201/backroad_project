import Tittle from './tittle';
import { tours } from '../data/data';
import Tour from './Tour';

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Tittle title="featured" subTitle="tours" />
      <div className="section-center featured-center">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
