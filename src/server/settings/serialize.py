from typequery import GenericMethod

from api.models.login_expiry import LoginExpiry
from api.models.user_info import UserInfo

serialize = GenericMethod('serialize')


@serialize.of(bool)
@serialize.of(type(None))
@serialize.of(int)
@serialize.of(float)
@serialize.of(str)
def serialize(value, **kwargs):
    return value


@serialize.of(UserInfo)
def serialize(user_info, **kwargs):
    result = {
        'email': user_info.email,
        'pw': user_info.pw,
        'name': user_info.name,
        'age': user_info.age,
    }
    return result


@serialize.of(LoginExpiry)
def serialize(login_expiry, **kwargs):
    result = {
        'email': login_expiry.email,
        'uuid': login_expiry.uuid,
        'expiry': login_expiry.expiry,
    }
    return result
