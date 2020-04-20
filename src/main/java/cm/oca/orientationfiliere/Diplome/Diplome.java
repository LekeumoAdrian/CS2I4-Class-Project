package cm.oca.orientationfiliere.Diplome;

import cm.oca.orientationfiliere.Debouche.Debouche;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.List;


@Data
@RequiredArgsConstructor
@AllArgsConstructor
@Entity

public class Diplome implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)


    private Long idDiplome;

    @NotNull
    private String intituleDiplome;
    @NotNull
    private String specialite;

    @ManyToMany
    private List<Debouche> debouches;
}