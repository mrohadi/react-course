using Entities.DataTransferObjects;
using Entities.Models;

namespace Service.Contracts;
public interface ICompanyService
{
    IEnumerable<CompanyDto> GetllCompanies(bool trackChanges);
    CompanyDto GetCompany(Guid companyId, bool trackChanges);
    CompanyDto CreateCompany(CompanyForCreationDto company);
}