using Configee.API.Models;
using Configee.API.Services;
using Microsoft.AspNetCore.Mvc;

namespace Configee.API.Controllers;

[ApiController]
[Route("[controller]")]
public class AuthController : ControllerBase
{
    private readonly ILogger<UsersController> _logger;
    private readonly UsersDb _usersDb;
    private readonly UsersAuth _usersAuth;

    public AuthController(ILogger<UsersController> logger, UsersDb usersDb, UsersAuth usersAuth)
    {
        _logger = logger;
        _usersDb = usersDb;
        _usersAuth = usersAuth;
    }

    [HttpGet("me")]
    public User Get()
    {
        _logger.LogDebug("Getting current user");
        return _usersDb.Users[1];
    }
}