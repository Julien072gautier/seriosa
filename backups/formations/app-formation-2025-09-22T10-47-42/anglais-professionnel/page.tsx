import FormationPage from '../../components/FormationPage';
import { FormationJsonLd } from '../../components/JsonLd';

const FormationAnglaisProfessionnelPage = () => {
  return (
    <>
      <FormationJsonLd formationSlug="anglais-professionnel" />
      <FormationPage slug="anglais-professionnel" />
    </>
  );
};

export default FormationAnglaisProfessionnelPage;