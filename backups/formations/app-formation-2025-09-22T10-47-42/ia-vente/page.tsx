import FormationPage from '../../components/FormationPage';
import { FormationJsonLd } from '../../components/JsonLd';

const FormationIaVentePage = () => {
  return (
    <>
      <FormationJsonLd formationSlug="ia-vente" />
      <FormationPage slug="ia-vente" />
    </>
  );
};

export default FormationIaVentePage;