"""modified_to_uuid

Revision ID: 29756c89efa6
Revises: d65bcb54b235
Create Date: 2020-05-04 01:40:27.157532

"""
import sqlalchemy as sa
import sqlalchemy_utils
from alembic import op

# revision identifiers, used by Alembic.
revision = '29756c89efa6'
down_revision = 'd65bcb54b235'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('login_expiry', sa.Column('uuid', sqlalchemy_utils.types.uuid.UUIDType(), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('login_expiry', 'uuid')
    # ### end Alembic commands ###