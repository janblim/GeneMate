from .db import db, environment, SCHEMA
from datetime import datetime

class GeneticData(db.Model):
    __tablename__ = 'genetic_data'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False, unique=True)
    filename = db.Column(db.String(255), nullable=False)
    snp_file = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime(timezone=True), default=datetime.now(), nullable=False)
    updated_at = db.Column(db.DateTime(timezone=True), default=datetime.now(), onupdate=datetime.now(), nullable=False)

    user = db.relationship('User', back_populates='genetic_data')
