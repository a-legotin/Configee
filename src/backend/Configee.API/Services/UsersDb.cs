using Configee.API.Models;

namespace Configee.API.Services;

public class UsersDb
{
    public readonly IDictionary<long, User> Users = new Dictionary<long, User>();


    public UsersDb()
    {
        Users[1] = new User(1, "alex@ezlab.ru", "admin");
        Users[2] = new User(1, "vasya@ezlab.ru", "user");
    }
}