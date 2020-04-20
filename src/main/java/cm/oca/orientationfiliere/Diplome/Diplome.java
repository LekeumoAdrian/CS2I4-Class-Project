package cm.oca.orientationfiliere.Diplome;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;



@Data
@RequiredArgsConstructor
@AllArgsConstructor
@Entity

public class Diplome implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idDiplome;
    private String intituleDiplome;
    private String specialite;
}