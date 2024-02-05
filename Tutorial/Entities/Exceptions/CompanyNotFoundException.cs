namespace Entities.Exceptions;

public sealed class CompanyNotFoundException : NotFoundException
{
    public CompanyNotFoundException(Guid guid)
        : base($"The company with id: {guid} doesn't exist in the database")
    {
    }
}