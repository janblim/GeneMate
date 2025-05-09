"""thrid migration

Revision ID: db82235775e0
Revises: 4d5a78de9ac4
Create Date: 2024-11-06 18:03:03.884283

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'db82235775e0'
down_revision = '4d5a78de9ac4'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('comments', schema=None) as batch_op:
        batch_op.alter_column('score',
               existing_type=sa.INTEGER(),
               nullable=True)
        batch_op.drop_column('parent_comment_id')

    with op.batch_alter_table('posts', schema=None) as batch_op:
        batch_op.alter_column('score',
               existing_type=sa.INTEGER(),
               nullable=True)

    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.alter_column('address',
               existing_type=sa.VARCHAR(length=60),
               nullable=False)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.alter_column('address',
               existing_type=sa.VARCHAR(length=60),
               nullable=True)

    with op.batch_alter_table('posts', schema=None) as batch_op:
        batch_op.alter_column('score',
               existing_type=sa.INTEGER(),
               nullable=False)

    with op.batch_alter_table('comments', schema=None) as batch_op:
        batch_op.add_column(sa.Column('parent_comment_id', sa.INTEGER(), nullable=True))
        batch_op.alter_column('score',
               existing_type=sa.INTEGER(),
               nullable=False)

    # ### end Alembic commands ###
