package cm.oca.orientationfiliere.Diplome;


import  org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/")

public class DiplomeController {

    private final DiplomeRepository diplomeRepository;

    public DiplomeController(DiplomeRepository diplomeRepository){
        this.diplomeRepository = diplomeRepository;
    }
    @GetMapping("/listDiplome")
    public List<Diplome> findAll(){
        return diplomeRepository.findAll();
    }

    @GetMapping("/unDiplome/{idDiplome}")
    public  ResponseEntity<Object> findByID(@PathVariable Long idDiplome){
        Optional<Diplome> diplome1 = diplomeRepository.findById(idDiplome);

        if (diplome1.isPresent()){
            return ResponseEntity.ok(diplome1.get());
        } else {
            return ResponseEntity.badRequest().body("Diplome introuvable");
        }
    }

    @PostMapping("/addDiplome")
    public ResponseEntity<Object> save(@RequestBody Diplome diplome){
        diplomeRepository.save(diplome);
        return ResponseEntity.ok("");
    }

}
