package cm.oca.orientationfiliere.Debouche;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;



@Data
@RequiredArgsConstructor
@AllArgsConstructor
@Entity

public class Debouche implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idDebouche;
    private String name;
    private String description;
}
