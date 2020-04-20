package cm.oca.orientationfiliere.Debouche;

import cm.oca.orientationfiliere.Diplome.Diplome;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.List;


@Data
//@RequiredArgsConstructor
@AllArgsConstructor
@Entity

public class Debouche implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idDebouche;

    @NotNull
    private String name;

    @NotNull
    private String description;

    @ManyToMany(mappedBy = "debouches")
    private List<Diplome> diplomes;

    public Debouche() {
    }
}
