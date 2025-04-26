from app.models import db, User, GeneticData
from werkzeug.security import generate_password_hash
from datetime import datetime

# Helper to load SNP file text
def load_snp_file(filepath):
    with open(filepath, 'r') as file:
        return file.read()

def seed_users():
    # Load sample DNA files
    sample_dna1 = load_snp_file('app/seeds/sample_files/sample_dna1.txt')
    sample_dna2 = load_snp_file('app/seeds/sample_files/sample_dna2.txt')
    sample_dna3 = load_snp_file('app/seeds/sample_files/sample_dna3.txt')
    sample_dna4 = load_snp_file('app/seeds/sample_files/sample_dna4.txt')
    sample_dna5 = load_snp_file('app/seeds/sample_files/sample_dna5.txt')
    sample_dna6 = load_snp_file('app/seeds/sample_files/sample_dna6.txt')

    # Create users
    user1 = User(
        username='demo_user',
        email='demo@genemate.com',
        address='123 Genome St.',
        first_name='Demo',
        last_name='User',
        picture=None,
        hashed_password=generate_password_hash('password'),
        created_at=datetime.utcnow(),
        updated_at=datetime.utcnow()
    )

    user2 = User(
        username='jane_doe',
        email='jane@example.com',
        address='456 Chromosome Ave.',
        first_name='Jane',
        last_name='Doe',
        picture=None,
        hashed_password=generate_password_hash('password123'),
        created_at=datetime.utcnow(),
        updated_at=datetime.utcnow()
    )

    user3 = User(
        username='john_smith',
        email='john@example.com',
        address='789 Helix Blvd.',
        first_name='John',
        last_name='Smith',
        picture=None,
        hashed_password=generate_password_hash('securepassword'),
        created_at=datetime.utcnow(),
        updated_at=datetime.utcnow()
    )

    user4 = User(
        username='amy_watson',
        email='amy@example.com',
        address='101 Mutation Ln.',
        first_name='Amy',
        last_name='Watson',
        picture=None,
        hashed_password=generate_password_hash('mypassword'),
        created_at=datetime.utcnow(),
        updated_at=datetime.utcnow()
    )

    user5 = User(
        username='luke_brown',
        email='luke@example.com',
        address='202 DNA Dr.',
        first_name='Luke',
        last_name='Brown',
        picture=None,
        hashed_password=generate_password_hash('password321'),
        created_at=datetime.utcnow(),
        updated_at=datetime.utcnow()
    )

    user6 = User(
        username='sara_green',
        email='sara@example.com',
        address='303 Genome Way.',
        first_name='Sara',
        last_name='Green',
        picture=None,
        hashed_password=generate_password_hash('password987'),
        created_at=datetime.utcnow(),
        updated_at=datetime.utcnow()
    )

    # Add users to session
    db.session.add_all([user1, user2, user3, user4, user5, user6])
    db.session.flush()  # flush to assign IDs

    # Now create GeneticData for each user
    user1_dna = GeneticData(
        user_id=user1.id,
        filename='sample_dna1.txt',
        snp_file=sample_dna1
    )
    user2_dna = GeneticData(
        user_id=user2.id,
        filename='sample_dna2.txt',
        snp_file=sample_dna2
    )
    user3_dna = GeneticData(
        user_id=user3.id,
        filename='sample_dna3.txt',
        snp_file=sample_dna3
    )
    user4_dna = GeneticData(
        user_id=user4.id,
        filename='sample_dna4.txt',
        snp_file=sample_dna4
    )
    user5_dna = GeneticData(
        user_id=user5.id,
        filename='sample_dna5.txt',
        snp_file=sample_dna5
    )
    user6_dna = GeneticData(
        user_id=user6.id,
        filename='sample_dna6.txt',
        snp_file=sample_dna6
    )

    db.session.add_all([user1_dna, user2_dna, user3_dna, user4_dna, user5_dna, user6_dna])
    db.session.commit()
