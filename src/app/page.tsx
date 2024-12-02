import { LatestBlog } from "@/components/blog/latesBlog";
import { CommunityEffort } from "@/components/communityEffort";
import { Footer } from "@/components/footer";
import { Funcionamiento } from "@/components/funcionamiento";
import Header from "@/components/header/Header";
import { Invitacion } from "@/components/invitacion";
import { Maos } from "@/components/maos";
import Nav from "@/components/nav/Nav";

export default function Home() {
  return (
    <div>
      <Nav />
      <Header />
      <CommunityEffort />
      <Funcionamiento />
      <Maos />
      <Invitacion />
      <LatestBlog />
      <Footer />
    </div>
  );
}
