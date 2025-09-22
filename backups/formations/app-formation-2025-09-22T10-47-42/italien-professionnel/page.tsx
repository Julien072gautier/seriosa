import FormationPage from '../../components/FormationPage';
import { FormationJsonLd } from '../../components/JsonLd';

const FormationItalienProfessionnelPage = () => {
  return (
    <>
      <FormationJsonLd formationSlug="italien-professionnel" />
      <FormationPage slug="italien-professionnel" />
    </>
  );
};

export default FormationItalienProfessionnelPage;