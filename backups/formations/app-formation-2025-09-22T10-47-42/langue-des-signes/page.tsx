import FormationPage from '../../components/FormationPage';
import { FormationJsonLd } from '../../components/JsonLd';

const FormationLangueDesSignesPage = () => {
  return (
    <>
      <FormationJsonLd formationSlug="langue-des-signes" />
      <FormationPage slug="langue-des-signes" />
    </>
  );
};

export default FormationLangueDesSignesPage;