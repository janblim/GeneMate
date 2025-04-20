import { Heart, Dna } from 'lucide-react';

function HomePage() {
  return (
    <div className="min-h-screen bg-bg-base text-text-primary font-sans p-6">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-romantic text-accent">GeneMate</h1>
        <p className="text-lg text-text-secondary mt-2">
          Where science meets romance.
        </p>
      </header>

      <section className="max-w-4xl mx-auto grid gap-6">
        <div className="bg-white shadow-soft rounded-2xl p-6">
          <div className="flex items-center gap-4">
            <Dna className="text-primary w-8 h-8" />
            <div>
              <h2 className="text-2xl font-semibold">Upload Your 23andMe Data</h2>
              <p className="text-text-secondary text-sm">
                Let our algorithm find potential matches based on your unique genome.
              </p>
            </div>
          </div>
          <button className="mt-4 bg-primary text-white hover:bg-primary/90 px-4 py-2 rounded-xl">
            Upload File
          </button>
        </div>

        <div className="bg-white shadow-soft rounded-2xl p-6">
          <div className="flex items-center gap-4">
            <Heart className="text-accent w-8 h-8" />
            <div>
              <h2 className="text-2xl font-semibold">View Genetic Compatibility</h2>
              <p className="text-text-secondary text-sm">
                Instantly see your heterozygosity and potential genetic incompatibilities with matches.
              </p>
            </div>
          </div>
          <button className="mt-4 bg-accent text-white hover:bg-accent/90 px-4 py-2 rounded-xl">
            Find Matches
          </button>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
