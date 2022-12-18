FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["Configee.API/Configee.API.csproj", "Configee.API/"]
RUN dotnet restore "Configee.API/Configee.API.csproj"
COPY . .
WORKDIR "/src/Configee.API"
RUN dotnet build "Configee.API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Configee.API.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Configee.API.dll"]
