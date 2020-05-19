"""change_to_json

Revision ID: 91b9baa85048
Revises: dc494cf49028
Create Date: 2020-05-13 16:39:29.760628

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = '91b9baa85048'
down_revision = 'dc494cf49028'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('top_keyword', sa.Column('keyword_json', sa.JSON(), nullable=False))
    op.drop_column('top_keyword', 'keyword')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('top_keyword', sa.Column('keyword', postgresql.ARRAY(sa.VARCHAR()), autoincrement=False, nullable=False))
    op.drop_column('top_keyword', 'keyword_json')
    # ### end Alembic commands ###