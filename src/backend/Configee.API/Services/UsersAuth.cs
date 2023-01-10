using Configee.API.Models;

namespace Configee.API.Services;

public class UsersAuth
{
    public readonly IDictionary<long, UserToken> UsersTokens = new Dictionary<long, UserToken>();


    public UsersAuth()
    {

    }

    public void SetUserToken(long userId, UserToken token)
    {
        UsersTokens[userId] = token;
    }
}