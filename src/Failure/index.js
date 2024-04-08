import { Container, Title, Statement } from "./styled";

export const Failure = () => (
  <Container>
    <Title>Przepraszamy</Title>
    <Statement>
      Napotkaliśmy nieoczekiwany błąd.😟 Sprawdź połączenie z Internetem, bądź
      spróbuj ponownie za chwilę. Gdyby błąd się powtarzał skontaktuj się z
      działem obsługi strony.
    </Statement>
  </Container>
);
