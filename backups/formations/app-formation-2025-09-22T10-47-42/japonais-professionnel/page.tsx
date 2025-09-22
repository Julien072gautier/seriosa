import FormationPage from '../../components/FormationPage';
import { FormationJsonLd } from '../../components/JsonLd';

const FormationJaponaisProfessionnelPage = () => {
  return (
    <>
      <FormationJsonLd formationSlug="japonais-professionnel" />
      <FormationPage slug="japonais-professionnel" />
    </>
  );
};

export default FormationJaponaisProfessionnelPage;