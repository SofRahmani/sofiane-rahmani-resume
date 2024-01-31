import Link from "next/link";
import Roles from "./Roles";

export default function Works() {
  return (
    <section className=" mx-auto flex w-full flex-col items-start justify-center gap-4 p-6 md:flex-row ">
      <h3 className=" text-2xl font-medium tracking-tight text-[#6c7781] lg:text-3xl ">Emplois</h3>
      <article className=" w-full md:w-3/5 ">
        <header className=" pl-4 ">
          <Link href={"https://www.cegedim-sante.com/"} className=" w-min ">
            <h4 className=" w-fit text-xl font-medium text-primary hover:underline lg:text-2xl ">
              Cegedim Sante
            </h4>
          </Link>
          <span className=' font-thin text-[#6c7781] '>(7 ans)</span>
          <div className=" lg:text-md my-2 -mt-[0px] w-full max-w-full text-sm text-default-600 md:w-1/2 ">
            Leader en France dans le secteur medical et paramedical
          </div>
        </header>

        <div className=" mt-6 flex flex-col items-start justify-start ">
          <Roles
            role="Expert Logiciel / Référant technique"
            description="En tant qu'expert logiciel et référant technique en France pour Maiia Gestion, j'ai l'opportunité de travailler de prêt avec les équipe R&D et Produit. Je dois contribuer à la formation continue des technicien Junior et Senior, répondre à leur demandes lorsqu'ils sont bloqués et les accompagner dans leur montée en compétence. Je dois également participer à la création de documentation technique et à la rédaction de scénarios de tests. Enfin, je gère une partie des ticket de bug (JIRA) en fournissant une analyse détaillée lorsque aucune solution n'est possible afin d'optimiser le workflow de l'équipe R&D."
            location="Rodez, FR"
            startDate="Août 2022"
            startDateTime="2022-08-01"
            endDate="Aujourd'hui"
            duration=""
            skills={[
              "Analyse technique",
              "Analyse de données SQL et MongoDB",
              "JIRA",
              "Documentation",
              "Formation",
              "Support technique",
              "Rédaction de scénarios de tests",
              "Rédaction de rapports de tests",
              "Gestion de ticket de bug",
              "Analyse de requêtes HTTP",
              "Analyse de logs",
              "règlementation médical"
            ]}
          />

          <Roles
            role="Technicien Senior / Spécialiste ingénierie"
            description="En tant que Technicien Senior, j'ai pu traiter des dossier bien plus complexe que lors de mon poste de Technicien Junior. J'ai également pu participer à la formation de nouveaux arrivants. Enfin, j'ai eu l'opportunité de devenir spécialiste pour notre gamme 'ingénierie' tel que Kinapsis et Sycomore ce qui m'a permis d'acquérir de nouvelles compétences et de travailler sur des projets plus ambitieux."
            location="Rodez, FR"
            startDate="Janvier 2018"
            startDateTime="2018-01-01"
            endDate="Aout 2022"
            endDateTime="2022-08-01"
            duration="(4 ans et 9 mois)"
            skills={[
              "Analyse de données",
              "Support Technique",
              "Formation",
              "Documentation",
              "configutration de serveur SQL"
            ]}
          />

          <Roles
            role="Testeur QA (mission)"
            description="En tant que testeur QA, j'avais comme mission de tester les nouvelles fonctionnalités de nos logiciels ainsi que de rédiger des rapports de tests. J'ai également pu travailler avec des équipes de développeurs et de chefs de projets ce qui m'a permis d'acquérir de nouvelles compétences."
            location="Rodez, FR"
            startDate="Novembre 2017"
            startDateTime="2017-11-01"
            endDate="Janvier 2018"
            endDateTime="2018-01-01"
            duration="(3 mois)"
            skills={[
              "Analyse de données",
              "Testing",
              "Documentation",
              "Rédaction de scénarios de tests",
              "Rédaction de rapports de tests"
            ]}
          />

          <Roles
            role="Technicien Junior"
            description="En tant que technicien junior, j'avais comme mission de répondre aux demandes techniques de nos clients ainsi que de les accompagner dans l'utilisation de nos logiciels. J'ai également participé à la création de documentation technique et à la formation de nouveaux arrivants."
            location="Rodez, FR"
            startDate="Fevrier 2017"
            startDateTime="2017-02-01"
            endDate="Novembre 2017"
            endDateTime="2017-11-01"
            duration="(10 mois)"
            skills={["Relation client", "Support technique", "Formation", "Documentation"]}
          />
        </div>
      </article>
    </section>
  );
}
