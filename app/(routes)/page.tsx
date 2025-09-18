import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";
import getBillboard from "@/actions/get-billboard";
export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard("64db85bf-c76c-4944-9e37-74fb5c56d949");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard}/>
      </div>
    </Container>
  );
}

export default HomePage;