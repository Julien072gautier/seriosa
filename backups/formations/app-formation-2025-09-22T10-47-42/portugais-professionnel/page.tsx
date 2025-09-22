import FormationPage from '../../components/FormationPage';
import { FormationJsonLd } from '../../components/JsonLd';

const FormationPortugaisProfessionnelPage = () => {
  return (
    <>
      <FormationJsonLd formationSlug="portugais-professionnel" />
      <FormationPage slug="portugais-professionnel" />
    </>
  );
};

export default FormationPortugaisProfessionnelPage;