from app.models import db, GeneticData
from datetime import datetime, timezone

# Helper to load SNP file text
def load_snp_file(filepath):
    with open(filepath, 'r') as file:
        return file.read()

def seed_genetic_data():
    # Load sample DNA files
    sample_dna1 = load_snp_file('app/seeds/sample_files/sample_dna1.txt')
    sample_dna2 = load_snp_file('app/seeds/sample_files/sample_dna2.txt')
    sample_dna3 = load_snp_file('app/seeds/sample_files/sample_dna3.txt')
    sample_dna4 = load_snp_file('app/seeds/sample_files/sample_dna4.txt')
    sample_dna5 = load_snp_file('app/seeds/sample_files/sample_dna5.txt')
    sample_dna6 = load_snp_file('app/seeds/sample_files/sample_dna6.txt')

    user1_dna = GeneticData(
        user_id=1,
        filename='sample_dna1.txt',
        snp_file=sample_dna1
    )
    user2_dna = GeneticData(
        user_id=2,
        filename='sample_dna2.txt',
        snp_file=sample_dna2
    )
    user3_dna = GeneticData(
        user_id=3,
        filename='sample_dna3.txt',
        snp_file=sample_dna3
    )
    user4_dna = GeneticData(
        user_id=4,
        filename='sample_dna4.txt',
        snp_file=sample_dna4
    )
    user5_dna = GeneticData(
        user_id=5,
        filename='sample_dna5.txt',
        snp_file=sample_dna5
    )
    user6_dna = GeneticData(
        user_id=6,
        filename='sample_dna6.txt',
        snp_file=sample_dna6
    )

    db.session.add_all([user1_dna, user2_dna, user3_dna, user4_dna, user5_dna, user6_dna])
    db.session.commit()
